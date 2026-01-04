'use client';

import { ReactNode } from 'react';

export function CodeBlock({ children, language = 'bash' }: { children: string; language?: string }) {
  return (
    <div className="relative group my-4">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => navigator.clipboard.writeText(children)}
          className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded"
        >
          Copy
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-gray-100 text-sm text-gray-800 rounded font-mono">
      {children}
    </code>
  );
}

export function Alert({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const colors = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  };

  return (
    <div className={`border-l-4 p-4 my-4 ${colors[type]}`}>
      {children}
    </div>
  );
}
