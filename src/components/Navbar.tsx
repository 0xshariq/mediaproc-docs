'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {  Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Search } from '@/components/Search';
import { VersionSelector } from '@/components/VersionSelector';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDocsPage = pathname?.startsWith('/docs');

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <Image src={'/mediaproc-logo.png'} alt="MediaProc Logo" width={40} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <VersionSelector />
            <Search />
            <Link
              href="/docs/introduction"
              className={`text-sm font-medium transition-colors hover:text-foreground ${isDocsPage ? 'text-foreground' : 'text-muted-foreground'
                }`}
            >
              Documentation
            </Link>
            <Link
              href="/plugins"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Plugins
            </Link>
            <Link
              href="/docs/community/creating-plugins"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
            <Link
              href="https://github.com/0xshariq/mediaproc-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link href="/docs/installation">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/docs/introduction"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/docs/plugins/image"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plugins
            </Link>
            <Link
              href="/docs/community/creating-plugins"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <a
              href="https://github.com/0xshariq/mediaproc-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <Link href="/docs/installation">
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
