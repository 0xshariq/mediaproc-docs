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
    <div className="flex min-h-screen">
      {/* Left Sidebar - Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </article>
            
            <Separator className="my-8 sm:my-12" />
            
            {/* Previous/Next Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {prevPage ? (
                <Link href={`/docs/${prevPage.slug}`}>
                  <Button variant="outline" className="w-full justify-start group h-auto py-2.5 sm:py-3">
                    <ChevronLeft className="mr-1.5 sm:mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <div className="text-left truncate">
                      <div className="text-xs text-muted-foreground">Previous</div>
                      <div className="text-xs sm:text-sm font-medium truncate">{prevPage.title}</div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="hidden sm:block"></div>
              )}
              
              {nextPage ? (
                <Link href={`/docs/${nextPage.slug}`}>
                  <Button variant="outline" className="w-full justify-end group h-auto py-2.5 sm:py-3">
                    <div className="text-right truncate">
                      <div className="text-xs text-muted-foreground">Next</div>
                      <div className="text-xs sm:text-sm font-medium truncate">{nextPage.title}</div>
                    </div>
                    <ChevronRight className="ml-1.5 sm:ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
              ) : (
                <div className="hidden sm:block"></div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
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
          </div>
        </main>
        
        {/* Right Sidebar - Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
}
