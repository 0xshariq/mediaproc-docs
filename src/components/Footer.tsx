import Link from 'next/link';
import { Terminal, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">MediaProc</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Universal media processing CLI for modern workflows
            </p>
            <a 
              href="https://github.com/0xshariq/mediaproc-cli"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Getting Started */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Getting Started</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs/introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/docs/quick-start" className="text-muted-foreground hover:text-foreground transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/docs/cli/overview" className="text-muted-foreground hover:text-foreground transition-colors">
                  CLI Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Plugins */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Official Plugins</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs/plugins/image" className="text-muted-foreground hover:text-foreground transition-colors">
                  Image
                </Link>
              </li>
              <li>
                <Link href="/docs/plugins/video" className="text-muted-foreground hover:text-foreground transition-colors">
                  Video
                </Link>
              </li>
              <li>
                <Link href="/docs/plugins/audio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/docs/plugins/document" className="text-muted-foreground hover:text-foreground transition-colors">
                  Document
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs/community/creating-plugins" className="text-muted-foreground hover:text-foreground transition-colors">
                  Create Plugins
                </Link>
              </li>
              <li>
                <Link href="/docs/community/plugin-guidelines" className="text-muted-foreground hover:text-foreground transition-colors">
                  Plugin Guidelines
                </Link>
              </li>
              <li>
                <Link href="/docs/community/contributing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contributing
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/mediaproc-cli/issues" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} MediaProc. Released under the{' '}
            <a 
              href="https://opensource.org/licenses/MIT" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              MIT License
            </a>
            .
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/0xshariq/mediaproc-cli" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/@mediaproc/cli" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
