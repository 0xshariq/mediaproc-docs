'use client';

import { AlertCircle, Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger' | 'success' | 'tip';
  title?: string;
  children: ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      container: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      title: 'text-blue-900 dark:text-blue-300',
      content: 'text-blue-800 dark:text-blue-200',
      Icon: Info,
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-600 dark:text-yellow-400',
      title: 'text-yellow-900 dark:text-yellow-300',
      content: 'text-yellow-800 dark:text-yellow-200',
      Icon: AlertTriangle,
    },
    danger: {
      container: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800',
      icon: 'text-red-600 dark:text-red-400',
      title: 'text-red-900 dark:text-red-300',
      content: 'text-red-800 dark:text-red-200',
      Icon: AlertCircle,
    },
    success: {
      container: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      title: 'text-green-900 dark:text-green-300',
      content: 'text-green-800 dark:text-green-200',
      Icon: CheckCircle,
    },
    tip: {
      container: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
      icon: 'text-purple-600 dark:text-purple-400',
      title: 'text-purple-900 dark:text-purple-300',
      content: 'text-purple-800 dark:text-purple-200',
      Icon: Lightbulb,
    },
  };

  const style = styles[type];
  const IconComponent = style.Icon;

  const defaultTitles = {
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    success: 'Success',
    tip: 'Tip',
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${style.container}`}>
      <div className="flex gap-3">
        <IconComponent className={`w-5 h-5 mt-0.5 shrink-0 ${style.icon}`} />
        <div className="flex-1 min-w-0">
          {(title || defaultTitles[type]) && (
            <div className={`font-semibold mb-1 ${style.title}`}>
              {title || defaultTitles[type]}
            </div>
          )}
          <div className={`text-sm leading-relaxed prose prose-sm max-w-none ${style.content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
