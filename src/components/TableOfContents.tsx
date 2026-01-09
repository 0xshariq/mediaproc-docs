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

    const handleScroll = () => {
      const mainContent = document.querySelector('main');
      if (!mainContent) return;

      const scrollTop = mainContent.scrollTop;
      let currentId = '';

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const mainRect = mainContent.getBoundingClientRect();
        const relativeTop = rect.top - mainRect.top;

        if (relativeTop <= 150) {
          currentId = heading.id;
        }
      }

      if (currentId && currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, [headings, activeId]);

  // Don't render on mobile or if no headings
  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-72 border-l border-border/50 shrink-0">
      <div className="sticky top-0 h-screen flex flex-col py-6 px-4">
        <div className="mb-6 px-2">
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
                  const mainContent = document.querySelector('main');
                  if (element && mainContent) {
                    const rect = element.getBoundingClientRect();
                    const mainRect = mainContent.getBoundingClientRect();
                    const scrollTop = mainContent.scrollTop;
                    const elementTop = rect.top - mainRect.top + scrollTop;
                    
                    mainContent.scrollTo({
                      top: elementTop - 100,
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
