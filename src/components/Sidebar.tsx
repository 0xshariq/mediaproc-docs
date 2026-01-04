'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig, type NavItem } from '@/config/docs-config';
import { useState } from 'react';

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
        <div className="flex items-center">
          {hasChildren && (
            <button
              onClick={() => toggleSection(item.title)}
              className="p-1 hover:bg-gray-100 rounded mr-1"
            >
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <Link
            href={`/docs/${item.slug}`}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
            style={{ paddingLeft: `${level * 12 + 12}px` }}
          >
            {item.title}
          </Link>
        </div>
        {hasChildren && isOpen && (
          <div className="mt-1">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-xl font-bold">MediaProc</span>
        </Link>

        <nav className="space-y-6">
          {navigationConfig.map((section) => (
            <div key={section.title}>
              <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => renderNavItem(item))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
