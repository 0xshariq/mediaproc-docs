'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');

  const headings = useMemo(() => {
    // Extract headings from the page
    const elements = Array.from(document.querySelectorAll('h1, h2, h3'));
    const items: TOCItem[] = elements
      .filter((el) => el.id) // Only include headings with IDs
      .map((el) => ({
        id: el.id,
        title: el.textContent || '',
        level: parseInt(el.tagName.substring(1)),
      }));
    return items;
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3'));
    
    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    elements.forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-8">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          On this page
        </h4>
        <nav className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                className={`
                  block text-sm py-1.5 transition-all duration-200
                  border-l-2 
                  ${isActive
                    ? 'border-primary text-primary font-medium pl-4'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted hover:pl-4 pl-3'
                  }
                `}
                style={{
                  paddingLeft: `${(heading.level - 1) * 0.75 + (isActive ? 1 : 0.75)}rem`,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {heading.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
