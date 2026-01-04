'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig, type NavItem } from '@/config/docs-config';
import { useState } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Official Plugins': true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (slug: string) => {
    const docPath = `/docs/${slug}`;
    return pathname === docPath;
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openSections[item.title] !== false;
    const active = isActive(item.slug);

    return (
      <div key={item.slug}>
        <div className="flex items-center group">
          {hasChildren && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleSection(item.title)}
              className="p-0 h-6 w-6 hover:bg-muted/50"
            >
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </Button>
          )}
          <Link
            href={`/docs/${item.slug}`}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
              active
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:pl-4'
            }`}
            style={{ paddingLeft: `${level * 16 + (hasChildren ? 4 : 12)}px` }}
          >
            {active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
            )}
            {item.title}
          </Link>
        </div>
        {hasChildren && isOpen && (
          <div className="mt-1 space-y-1">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 border-r border-border/50 bg-card/30 backdrop-blur-sm h-[calc(100vh-4rem)] sticky top-16 flex flex-col">
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-6">
          {navigationConfig.map((section) => (
            <div key={section.title}>
              <h3 className="px-3 mb-3 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-0.5">
                {section.items.map((item) => renderNavItem(item))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-border/50 bg-muted/20">
        <div className="text-xs text-muted-foreground mb-1.5">Version</div>
        <div className="text-sm font-mono font-semibold text-foreground">v0.5.2</div>
      </div>
    </aside>
  );
}
