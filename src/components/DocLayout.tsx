import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TableOfContents } from './TableOfContents';
import { Separator } from '@/components/ui/separator';

export function DocLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl px-8 py-12">
          <article className="prose prose-lg">
            {children}
          </article>
          <Separator className="my-12" />
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
