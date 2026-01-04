import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export function DocLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </main>
      <aside className="w-64 border-l border-gray-200 bg-gray-50 p-6 hidden xl:block">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">On This Page</h3>
        <div className="text-sm text-gray-600 space-y-2">
          {/* Table of contents will be dynamically generated */}
        </div>
      </aside>
    </div>
  );
}
