'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function OnThisPage() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  // Extract headings from article when route changes
  useEffect(() => {
    const updateHeadings = () => {
      const article = document.querySelector('article');
      if (!article) {
        setHeadings([]);
        return;
      }

      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const items: TOCItem[] = elements
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          title: el.textContent || '',
          level: parseInt(el.tagName.substring(1)),
        }));
      setHeadings(items);

      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    };

    updateHeadings();
    const timer = setTimeout(updateHeadings, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Track active heading on scroll with intersection observer for better accuracy
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  // Handle scroll for fallback (when intersection observer doesn't work well)
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
      handleScroll();
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, [headings, activeId]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0 h-screen overflow-hidden">
      <div className="flex flex-col h-full py-8 pr-8">
        <div className="mb-4 shrink-0">
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground px-1">
            On this page
          </h2>
        </div>

        <nav className="space-y-1 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-border/50 scrollbar-track-transparent pr-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isH3 = heading.level === 3;

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`
                  block text-sm py-2 px-3 transition-all duration-200 rounded-md
                  relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-full
                  before:transition-all before:duration-200
                  ${isActive
                    ? 'text-primary font-medium bg-primary/5 before:bg-primary before:opacity-100'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 before:bg-border before:opacity-0 hover:before:opacity-100'
                  }
                  ${isH3 ? 'ml-4 text-xs py-1.5' : ''}
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  const mainContent = document.getElementById('main-content');
                  if (element && mainContent) {
                    const rect = element.getBoundingClientRect();
                    const mainRect = mainContent.getBoundingClientRect();
                    const scrollTop = mainContent.scrollTop;
                    const elementTop = rect.top - mainRect.top + scrollTop;
                    
                    mainContent.scrollTo({
                      top: elementTop - 80,
                      behavior: 'smooth',
                    });
                    setActiveId(heading.id);
                  }
                }}
              >
                <span className="line-clamp-2">{heading.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
