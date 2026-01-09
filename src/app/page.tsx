import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal as TerminalIcon, Zap, Package, Code2, Sparkles } from "lucide-react";
import { Terminal, InlineTerminal } from "@/components/Terminal";

export default function Home() {
  return (
    <div className="flex-1 bg-linear-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 text-center">
          <div className="inline-flex items-center bg-muted px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8">
            <span>Universal Media Processing CLI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
            One CLI to Process
            <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              All Your Media
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Modern, plugin-based media processing for images, videos, audio, documents and more.
            Stop juggling multiple tools—use one consistent CLI for everything.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 px-4">
            <Link href="/docs/installation" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/quick-start" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Quick Start
              </Button>
            </Link>
          </div>

          {/* Terminal Demo */}
          <Terminal
            className="max-w-3xl mx-auto px-2 sm:px-0"
            commands={[
              { command: 'npm install -g @mediaproc/cli' },
              { command: 'mediaproc add image' },
              { command: 'mediaproc image resize photo.jpg --width 1920' },
              { output: '✓ Resized to 1920x1080 • Saved as photo.jpg', isSuccess: true }
            ]}
          />
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why MediaProc?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Stop context-switching between tools. Process any media with one consistent CLI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 hover-lift">
              <TerminalIcon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Unified Interface</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
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
              <TerminalIcon className="w-12 h-12 text-primary mb-4" />
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
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 bg-muted/30 rounded-xl sm:rounded-2xl mb-12 sm:mb-16 lg:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">Get Started in Seconds</h2>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm sm:text-base font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">Install MediaProc</h3>
                    <InlineTerminal command="npm install -g @mediaproc/cli" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Add Plugins (Coming Soon...)</h3>
                    <InlineTerminal command="mediaproc add image video audio" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Start Processing</h3>
                    <div className="bg-muted/50 px-4 py-3 rounded-lg font-mono text-sm border border-border space-y-1">
                      <div><span className="text-primary">$</span> mediaproc image resize photo.jpg --width 1920</div>
                      <div><span className="text-primary">$</span> mediaproc video transcode video.mp4 --codec h264</div>
                      <div><span className="text-primary">$</span> mediaproc audio convert song.mp3 --format wav</div>
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
      </div>
  );
}
