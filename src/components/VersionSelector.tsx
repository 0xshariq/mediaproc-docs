'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';

interface Version {
    version: string;
    label: string;
    url?: string;
    isCurrent?: boolean;
}

const versions: Version[] = [
    {
        version: '1.0.0',
        label: 'v1.0.0 (latest)',
        isCurrent: true,
    }
];

export function VersionSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVersion] = useState(
        versions.find((v) => v.isCurrent) || versions[0]
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-border bg-muted/50 hover:bg-muted hover:border-primary/50 transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label="Select version"
            >
                <span className="font-medium">{currentVersion.version}</span>
                <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground tracking-wider">
                            Available Versions
                        </div>
                        <div role="listbox" className="space-y-1">
                            {versions.map((version) => (
                                <button
                                    key={version.version}
                                    onClick={() => {
                                        // Version switching logic would go here
                                        // For now, just close the dropdown
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${version.isCurrent
                                        ? 'bg-primary/10 text-primary'
                                        : 'hover:bg-muted text-foreground'
                                        }`}
                                    role="option"
                                    aria-selected={version.isCurrent}
                                >
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium">{version.version}</span>
                                        {version.isCurrent && (
                                            <span className="text-xs text-muted-foreground">Current</span>
                                        )}
                                    </div>
                                    {version.isCurrent && (
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-border p-2">
                        <Link
                            href="https://github.com/0xshariq/mediaproc-cli/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            View all releases →
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
