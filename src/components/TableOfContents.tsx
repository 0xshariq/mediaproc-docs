'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  // Extract headings from article when route changes
  useEffect(() => {
    const updateHeadings = () => {
      // Only look for headings inside article element
      const article = document.querySelector('article');
      if (!article) {
        setHeadings([]);
        return;
      }

      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const items: TOCItem[] = elements
        .filter((el) => el.id) // Only include headings with IDs
        .map((el) => ({
          id: el.id,
          title: el.textContent || '',
          level: parseInt(el.tagName.substring(1)),
        }));
      setHeadings(items);

      // Set first heading as active by default
      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    };

    // Update immediately
    updateHeadings();

    // Also update after a short delay to ensure content is rendered
    const timer = setTimeout(updateHeadings, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const article = document.querySelector('article');
    if (!article) return;

    const elements = Array.from(article.querySelectorAll('h2, h3'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 1.0
      }
    );

    elements.forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Don't render on mobile or if no headings
  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 border-l border-border/50 shrink-0 self-start">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto py-6 px-4">
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <h2 className="text-sm font-semibold uppercase tracking-wide">
            On this page
          </h2>
        </div>

        <nav className="space-y-0.5">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isH3 = heading.level === 3;

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`
                  block text-sm py-1.5 px-2 transition-all duration-200 rounded
                  ${isActive
                    ? 'text-primary font-medium bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                  ${isH3 ? 'ml-3 text-xs' : ''}
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth',
                    });
                    setActiveId(heading.id);
                  }
                }}
              >
                {heading.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
