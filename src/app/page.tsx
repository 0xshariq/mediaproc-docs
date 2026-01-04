import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal, Zap, Package, Code2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gradient-to-b from-background to-background/50">
        {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full text-sm mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Universal Media Processing CLI</span>
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          One CLI to Process
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            All Your Media
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Modern, plugin-based media processing for images, videos, audio, documents and more. 
          Stop juggling multiple tools—use one consistent CLI for everything.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <Link href="/docs/installation">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/docs/quick-start">
            <Button size="lg" variant="outline">
              Quick Start
            </Button>
          </Link>
        </div>

        {/* Terminal Demo */}
        <Card className="max-w-3xl mx-auto p-6 bg-card border-border hover-lift">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-muted-foreground ml-4">Terminal</span>
          </div>
          <div className="text-left font-mono text-sm space-y-2">
            <div>
              <span className="text-primary">$</span> <span className="text-foreground">npm install -g @mediaproc/cli</span>
            </div>
            <div>
              <span className="text-primary">$</span> <span className="text-foreground">mediaproc add image</span>
            </div>
            <div>
              <span className="text-primary">$</span> <span className="text-foreground">mediaproc image resize photo.jpg --width 1920</span>
            </div>
            <div className="text-green-400">✓ Resized to 1920x1080 • Saved as photo.jpg</div>
          </div>
        </Card>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why MediaProc?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop context-switching between tools. Process any media with one consistent CLI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover-lift">
            <Terminal className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unified Interface</h3>
            <p className="text-muted-foreground">
              One consistent CLI for images, videos, audio, documents, and more. Learn once, use everywhere.
            </p>
          </Card>

          <Card className="p-6 hover-lift">
            <Package className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plugin Architecture</h3>
            <p className="text-muted-foreground">
              Install only what you need. Official plugins for common tasks, community plugins for specialized work.
            </p>
          </Card>

          <Card className="p-6 hover-lift">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-muted-foreground">
              Multi-threaded processing, streaming support, and optimized for large files.
            </p>
          </Card>

          <Card className="p-6 hover-lift">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
            <p className="text-muted-foreground">
              TypeScript-first with excellent error messages and comprehensive documentation.
            </p>
          </Card>

          <Card className="p-6 hover-lift">
            <Terminal className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automation Ready</h3>
            <p className="text-muted-foreground">
              Perfect for CI/CD pipelines, batch processing, and scripted workflows.
            </p>
          </Card>

          <Card className="p-6 hover-lift">
            <Sparkles className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern & Extensible</h3>
            <p className="text-muted-foreground">
              Built with modern tools, fully extensible, and actively maintained.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-6 py-24 bg-muted/30 rounded-2xl mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get Started in Seconds</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Install MediaProc</h3>
                  <div className="bg-background p-4 rounded font-mono text-sm">
                    npm install -g @mediaproc/cli
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Add Plugins</h3>
                  <div className="bg-background p-4 rounded font-mono text-sm">
                    mediaproc add image video audio
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Start Processing</h3>
                  <div className="bg-background p-4 rounded font-mono text-sm space-y-1">
                    <div>mediaproc image resize photo.jpg --width 1920</div>
                    <div>mediaproc video transcode video.mp4 --codec h264</div>
                    <div>mediaproc audio convert song.mp3 --format wav</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/docs/introduction">
              <Button size="lg" variant="outline" className="group">
                Read Full Documentation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MediaProc</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Universal media processing CLI
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <div className="space-y-2 text-sm">
                <Link href="/docs/introduction" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Introduction
                </Link>
                <Link href="/docs/installation" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Installation
                </Link>
                <Link href="/docs/quick-start" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Quick Start
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Plugins</h4>
              <div className="space-y-2 text-sm">
                <Link href="/docs/plugins/image" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Image
                </Link>
                <Link href="/docs/plugins/video" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Video
                </Link>
                <Link href="/docs/plugins/audio" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Audio
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-sm">
                <Link href="https://github.com/0xshariq/mediaproc-cli" className="block text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </Link>
                <Link href="/docs/community/contributing" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contributing
                </Link>
                <Link href="/docs/community/creating-plugins" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Create Plugins
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 MediaProc. Released under the MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
