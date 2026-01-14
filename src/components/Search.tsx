'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';
import { navigationConfig } from '@/config/docs-config';
import Link from 'next/link';

interface SearchResult {
    title: string;
    slug: string;
    type: 'guide' | 'plugin' | 'command';
    section?: string;
}

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Build searchable index from navigation config
    const buildSearchIndex = useCallback((): SearchResult[] => {
        const index: SearchResult[] = [];

        navigationConfig.forEach((section) => {
            section.items.forEach((item) => {
                index.push({
                    title: item.title,
                    slug: item.slug,
                    type: 'guide',
                    section: section.title,
                });

                // Add child items (commands)
                if (item.children) {
                    item.children.forEach((child) => {
                        index.push({
                            title: child.title,
                            slug: child.slug,
                            type: 'command',
                            section: item.title,
                        });
                    });
                }
            });
        });

        return index;
    }, []);

    // Search function with improved scoring
    const search = useCallback((query: string) => {
        const index = buildSearchIndex();
        
        // If no query, show all results
        if (!query.trim()) {
            setResults(index.slice(0, 20)); // Show first 20 items
            setSelectedIndex(0);
            return;
        }

        const searchQuery = query.toLowerCase();
        const searchWords = searchQuery.split(' ').filter(w => w.length > 0);

        // Score and filter results
        const scored = index
            .map((item) => {
                const title = item.title.toLowerCase();
                const slug = item.slug.toLowerCase();
                const section = (item.section || '').toLowerCase();
                
                let score = 0;
                
                // Exact match gets highest score
                if (title === searchQuery) score += 100;
                
                // Title starts with query
                if (title.startsWith(searchQuery)) score += 50;
                
                // Title contains query
                if (title.includes(searchQuery)) score += 30;
                
                // All words match
                const allWordsMatch = searchWords.every(word => 
                    title.includes(word) || slug.includes(word) || section.includes(word)
                );
                if (allWordsMatch) score += 20;
                
                // Individual word matches
                searchWords.forEach(word => {
                    if (title.includes(word)) score += 10;
                    if (slug.includes(word)) score += 5;
                    if (section.includes(word)) score += 3;
                });
                
                return { item, score };
            })
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map(({ item }) => item);

        setResults(scored);
        setSelectedIndex(0);
    }, [buildSearchIndex]);

    // Initialize results when search opens
    useEffect(() => {
        if (isOpen) {
            // Always search when opening to show all results or filter current query
            setTimeout(() => search(query), 0);
        }
    }, [isOpen]);

    // Handle select action
    const handleSelect = useCallback(() => {
        setIsOpen(false);
        setQuery('');
        // Navigation will be handled by Link component
    }, []);

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ctrl+K or Cmd+K to open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
                setTimeout(() => inputRef.current?.focus(), 0);
            }

            // Escape to close
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                setQuery('');
            }

            // Arrow keys to navigate results
            if (isOpen && results.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % results.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (results[selectedIndex]) {
                        handleSelect();
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex, handleSelect]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => {
                    setIsOpen(true);
                    setTimeout(() => inputRef.current?.focus(), 0);
                }}
                className="relative group hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/50 hover:bg-muted hover:border-primary/50 transition-colors cursor-pointer text-sm text-muted-foreground"
            >
                <SearchIcon className="w-4 h-4" />
                <span>Search docs...</span>
                <kbd className="ml-auto hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-background border border-border text-xs font-semibold">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Search Dialog */}
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Container */}
                    <div className="flex items-start justify-center min-h-screen pt-[15vh] px-4">
                        <div
                            ref={containerRef}
                            className="relative w-full max-w-2xl rounded-lg border border-border bg-background shadow-2xl overflow-hidden"
                        >
                            {/* Search Input */}
                            <div className="flex items-center gap-3 border-b border-border px-4 py-4">
                                <SearchIcon className="w-5 h-5 text-muted-foreground shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search documentation..."
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        search(e.target.value);
                                    }}
                                    className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
                                    autoFocus
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground hover:bg-muted/80"
                                >
                                    ESC
                                </button>
                            </div>

                            {/* Results */}
                            <div className="max-h-96 overflow-y-auto">
                                {results.length > 0 ? (
                                    <div className="p-2">
                                        {results.map((result, index) => (
                                            <Link 
                                                key={`${result.slug}-${index}`} 
                                                href={result.slug.startsWith('/') ? result.slug : `/docs/${result.slug}`}
                                            >
                                                <div
                                                    onClick={handleSelect}
                                                    className={`w-full flex items-start justify-between gap-3 px-3 py-3 rounded-md transition-colors text-left cursor-pointer ${index === selectedIndex
                                                            ? 'bg-primary/10 border border-primary/30'
                                                            : 'hover:bg-muted border border-transparent'
                                                        }`}
                                                >
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium text-sm truncate">{result.title}</div>
                                                        {result.section && (
                                                            <div className="text-xs text-muted-foreground mt-1">
                                                                {result.section}
                                                                {result.type === 'command' && ` • Command`}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : query ? (
                                    <div className="px-4 py-8 text-center text-muted-foreground">
                                        <SearchIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">No results found for &quot;{query}&quot;</p>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
