'use client';

import { ReactNode, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CodeBlock({ children, language = 'bash' }: { children: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Button
          onClick={copyToClipboard}
          size="sm"
          variant="secondary"
          className="h-8 px-3"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="bg-card border border-border p-6 rounded-lg overflow-x-auto">
        <code className={`language-${language} text-sm`}>{children}</code>
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="px-2 py-0.5 bg-muted text-sm rounded font-mono border border-border">
      {children}
    </code>
  );
}

export function Alert({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'success' | 'error' }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/50 text-blue-200',
    warning: 'bg-yellow-500/10 border-yellow-500/50 text-yellow-200',
    success: 'bg-green-500/10 border-green-500/50 text-green-200',
    error: 'bg-red-500/10 border-red-500/50 text-red-200',
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded ${styles[type]}`}>
      {children}
    </div>
  );
}
