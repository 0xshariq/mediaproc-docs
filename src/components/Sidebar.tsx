'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig, type NavItem } from '@/config/docs-config';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    const docPath = `/docs/${slug}`;
    return pathname === docPath;
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.slug);

    if (hasChildren) {
      return (
        <AccordionItem key={item.slug} value={item.slug} className="border-none">
          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pb-2">
            <div className="space-y-0.5 mt-1 pl-3">
              {item.children!.map((child) => renderNavItem(child, level + 1))}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <Link
        key={item.slug}
        href={`/docs/${item.slug}`}
        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
          active
            ? 'bg-primary/10 text-primary font-semibold'
            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:translate-x-1'
        }`}
        style={{ paddingLeft: `${level * 12 + 12}px` }}
      >
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
        )}
        {item.title}
      </Link>
    );
  };

  return (
    <aside className="w-64 border-r border-border/50 bg-card/30 backdrop-blur-sm shrink-0 flex flex-col h-full">
      <ScrollArea className="flex-1 h-0">
        <div className="px-3 py-6">
            <nav className="space-y-6 pb-6">
            {navigationConfig.map((section) => (
              <div key={section.title}>
                <h3 className="px-3 mb-3 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
                  {section.title}
                </h3>
                <Accordion type="single" collapsible className="space-y-0.5">
                  {section.items.map((item) => renderNavItem(item))}
                </Accordion>
              </div>
            ))}
          </nav>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border/50 bg-muted/20 shrink-0">
        <div className="text-xs text-muted-foreground mb-1.5">Version</div>
        <div className="text-sm font-mono font-semibold text-foreground">v0.5.2</div>
      </div>
    </aside>
  );
}
