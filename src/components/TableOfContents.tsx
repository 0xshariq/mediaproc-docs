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
    <aside className="hidden xl:block w-72 border-l border-border/50 shrink-0 h-screen sticky top-0 overflow-hidden">
      <div className="h-full flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 mb-6 px-2">
          <svg
            className="w-4 h-4 text-muted-foreground"
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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            On this page
          </h2>
        </div>

        <nav className="space-y-1 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isH3 = heading.level === 3;

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`
                  block text-sm py-2 px-3 transition-all duration-200 rounded-lg border-l-2
                  ${isActive
                    ? 'text-foreground font-medium border-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent'
                  }
                  ${isH3 ? 'ml-4 text-xs py-1.5' : ''}
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
