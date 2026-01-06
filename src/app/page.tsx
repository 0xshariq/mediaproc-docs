import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal as TerminalIcon, Zap, Package, Code2, Sparkles } from "lucide-react";
import { Terminal, InlineTerminal } from "@/components/Terminal";

export default function Home() {
  return (
    <div className="flex-1 bg-linear-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full text-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Universal Media Processing CLI</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight mb-6">
            One CLI to Process
            <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
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
          <Terminal
            className="max-w-3xl mx-auto"
            commands={[
              { command: 'npm install -g @mediaproc/cli' },
              { command: 'mediaproc add image' },
              { command: 'mediaproc image resize photo.jpg --width 1920' },
              { output: '✓ Resized to 1920x1080 • Saved as photo.jpg', isSuccess: true }
            ]}
          />
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
              <TerminalIcon className="w-12 h-12 text-primary mb-4" />
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
        <section className="container mx-auto px-6 py-24 bg-muted/30 rounded-2xl mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Get Started in Seconds</h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Install MediaProc</h3>
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
