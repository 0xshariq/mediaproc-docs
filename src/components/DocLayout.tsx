'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Sidebar } from './Sidebar';
import { TableOfContents } from './TableOfContents';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { navigationConfig } from '@/config/docs-config';

// Flatten all navigation items to get prev/next
function getAllPages() {
  const pages: Array<{ title: string; slug: string }> = [];
  
  navigationConfig.forEach((section) => {
    section.items.forEach((item) => {
      pages.push({ title: item.title, slug: item.slug });
      if (item.children) {
        item.children.forEach((child) => {
          pages.push({ title: child.title, slug: child.slug });
        });
      }
    });
  });
  
  return pages;
}

export function DocLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentSlug = pathname.replace('/docs/', '');
  const allPages = getAllPages();
  const currentIndex = allPages.findIndex((page) => page.slug === currentSlug);
  
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <>
      <div className="flex flex-1 relative">
        <Sidebar />
        <main className="flex-1 max-w-4xl px-8 py-12 min-h-screen">
          <article className="prose prose-lg">
            {children}
          </article>
          
          <Separator className="my-12" />
          
          {/* Previous/Next Navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            {prevPage ? (
              <Link href={`/docs/${prevPage.slug}`} className="flex-1">
                <Button variant="outline" className="w-full justify-start group h-auto py-3">
                  <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="text-sm font-medium">{prevPage.title}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {nextPage ? (
              <Link href={`/docs/${nextPage.slug}`} className="flex-1">
                <Button variant="outline" className="w-full justify-end group h-auto py-3">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="text-sm font-medium">{nextPage.title}</div>
                  </div>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>Found an issue? Help us improve this page.</p>
            <a 
              href="https://github.com/0xshariq/mediaproc-cli" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Edit on GitHub →
            </a>
          </div>
        </main>
        <TableOfContents />
      </div>
    </>
  );
}
