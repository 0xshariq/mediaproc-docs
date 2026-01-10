import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal as TerminalIcon, Zap, Package, Code2, Globe, Gauge, Sparkles } from "lucide-react";
import { Terminal, InlineTerminal } from "@/components/Terminal";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 text-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="inline-flex items-center bg-muted border border-border px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
          <span className="text-primary mr-2">●</span>
          <span>Universal Media Processing CLI</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
          One CLI to Process
          <br />
          <span className="bg-linear-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
            All Your Media
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Modern, plugin-based media processing for images, videos, audio, and more.
          <br className="hidden sm:block" />
          Stop juggling multiple tools—use one consistent CLI for everything.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <Link href="/docs/installation">
            <Button size="lg" className="group w-full sm:w-auto text-base px-8">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/docs/quick-start">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
              Quick Start Guide
            </Button>
          </Link>
        </div>

        {/* Terminal Demo */}
        <Terminal
          className="max-w-4xl mx-auto shadow-2xl"
          commands={[
            { command: 'npm install -g @mediaproc/cli' },
            { command: 'mediaproc add image video audio' },
            { command: 'mediaproc image resize photo.jpg --width 1920' },
            { output: '✓ Resized to 1920x1080 • 2.4MB → 1.1MB • Saved as photo.jpg', isSuccess: true }
          ]}
        />
      </section>

      {/* Problem Statement */}
      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Why MediaProc?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Modern development requires processing various media types. Instead of learning ImageMagick for images, 
              FFmpeg for video, SoX for audio, and countless other tools, MediaProc provides a single, consistent interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-background border-2">
              <div className="text-red-500 mb-4 text-4xl font-bold">❌</div>
              <h3 className="text-xl font-semibold mb-4">Traditional Approach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Learn different CLI syntax for each tool</li>
                <li>• Install and configure multiple dependencies</li>
                <li>• Context switch between documentation sites</li>
                <li>• Inconsistent flag patterns and behaviors</li>
                <li>• Complex installation and version management</li>
              </ul>
            </Card>

            <Card className="p-8 bg-background border-2 border-primary">
              <div className="text-green-500 mb-4 text-4xl font-bold">✓</div>
              <h3 className="text-xl font-semibold mb-4">MediaProc Way</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• One consistent CLI for all media types</li>
                <li>• Single installation, plugin-based architecture</li>
                <li>• Unified documentation and examples</li>
                <li>• Predictable flags and intuitive commands</li>
                <li>• Modern TypeScript with excellent DX</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for developers who need reliable, fast, and flexible media processing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <TerminalIcon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Unified Interface</h3>
            <p className="text-muted-foreground leading-relaxed">
              One consistent CLI for images, videos, audio, documents, and more. Learn the syntax once, apply everywhere.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <Package className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Plugin Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Install only what you need. Official plugins for common tasks, with support for community extensions.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">High Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-threaded processing, streaming support, and optimized algorithms for handling large files efficiently.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
            <p className="text-muted-foreground leading-relaxed">
              TypeScript-first with excellent error messages, comprehensive docs, and helpful debugging output.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <Gauge className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Automation Ready</h3>
            <p className="text-muted-foreground leading-relaxed">
              Perfect for CI/CD pipelines, batch processing, and scripted workflows with predictable exit codes.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <Globe className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cross-Platform</h3>
            <p className="text-muted-foreground leading-relaxed">
              Works seamlessly on Linux, macOS, and Windows with consistent behavior across all platforms.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Built for Real Workflows</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              From content creators to DevOps engineers, MediaProc streamlines media processing tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">🎨 Content Creators</h3>
              <p className="text-sm text-muted-foreground">
                Batch resize images, compress videos, normalize audio for podcasts—all from a single tool.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">🚀 DevOps Teams</h3>
              <p className="text-sm text-muted-foreground">
                Automate asset optimization in CI/CD pipelines with consistent, scriptable commands.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">📱 App Developers</h3>
              <p className="text-sm text-muted-foreground">
                Generate thumbnails, transcode videos, optimize images for different screen densities.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">📊 Data Teams</h3>
              <p className="text-sm text-muted-foreground">
                Extract metadata, convert formats, process media datasets for ML training.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">🎬 Video Editors</h3>
              <p className="text-sm text-muted-foreground">
                Trim clips, extract audio, generate previews, and transcode to different formats.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">🌐 Web Developers</h3>
              <p className="text-sm text-muted-foreground">
                Optimize images for web, generate WebP versions, create responsive image sets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get Started in Seconds</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Three simple steps to start processing media like a pro.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-2">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Install MediaProc</h3>
                  <InlineTerminal command="npm install -g @mediaproc/cli" />
                  <p className="text-sm text-muted-foreground mt-3">
                    Or use <code className="text-xs bg-muted px-2 py-1 rounded">yarn</code> or <code className="text-xs bg-muted px-2 py-1 rounded">pnpm</code>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Add Plugins</h3>
                  <InlineTerminal command="mediaproc add image video audio" />
                  <p className="text-sm text-muted-foreground mt-3">
                    Install only the plugins you need. More plugins available: <code className="text-xs bg-muted px-2 py-1 rounded">document</code>, <code className="text-xs bg-muted px-2 py-1 rounded">animation</code>, <code className="text-xs bg-muted px-2 py-1 rounded">3d</code>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Start Processing</h3>
                  <div className="bg-muted/50 px-4 py-4 rounded-lg font-mono text-sm border border-border space-y-2">
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
              <Button size="lg" variant="outline" className="group text-base px-8">
                Read Full Documentation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Powered By */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Built on Industry-Standard Tools
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <a href="https://ffmpeg.org" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
              FFmpeg
            </a>
            <a href="https://sharp.pixelplumbing.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
              Sharp
            </a>
            <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
              TypeScript
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            MediaProc provides a modern interface to battle-tested tools, combining the power of FFmpeg and Sharp with developer-friendly commands.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Simplify Your Workflow?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10">
            Join developers who are processing media faster and more efficiently with MediaProc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs/installation">
              <Button size="lg" className="group w-full sm:w-auto text-base px-8">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/cli-overview">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
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