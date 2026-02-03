import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal as TerminalIcon, Zap, Package, Code2, Globe, Gauge, Check, Star, Github } from "lucide-react";
import { Terminal, InlineTerminal } from "@/components/Terminal";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 text-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="inline-flex items-center bg-muted border border-border px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm hover:border-primary/50 transition-colors">
          <span className="text-primary mr-2 animate-pulse">●</span>
          <span className="font-medium">v1.0.0 Released</span>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="text-muted-foreground">Universal Media Processing CLI</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 animate-fade-in">
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
            <Button size="lg" className="group w-full sm:w-auto text-base px-8 shadow-lg hover:shadow-xl transition-all">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/docs/quick-start">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 hover:border-primary/50 transition-all">
              Quick Start Guide
            </Button>
          </Link>
          <Link href="https://github.com/0xshariq/mediaproc" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base px-8 gap-2">
              <Github className="w-5 h-5" />
              <span className="flex items-center gap-2">
                Star on GitHub
                <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">Give us a ⭐</span>
                </span>
              </span>
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span><strong className="text-foreground font-semibold">47</strong> Image Commands</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span><strong className="text-foreground font-semibold">8</strong> Video Commands</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span><strong className="text-foreground font-semibold">6</strong> Audio Commands</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span><strong className="text-foreground font-semibold">100%</strong> Open Source</span>
          </div>
        </div>

        {/* Terminal Demo */}
        <Terminal
          className="max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-shadow"
          commands={[
            { command: '# Install MediaProc globally' },
            { command: 'npm install -g @mediaproc/cli' },
            { output: '✓ Installed @mediaproc/cli@1.0.0', isSuccess: true },
            { command: '\n# Add plugins for media processing' },
            { command: 'mediaproc add image video audio' },
            { output: '✓ Added @mediaproc/image@1.4.7\n✓ Added @mediaproc/video@1.4.4\n✓ Added @mediaproc/audio@1.3.3', isSuccess: true },
            { command: '\n# Process your first image' },
            { command: 'mediaproc image resize photo.jpg --width 1920 --height 1080' },
            { output: '✓ Resized photo.jpg to 1920x1080 • 2.4MB → 1.1MB', isSuccess: true }
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
              <Button size="lg" className="group w-full sm:w-auto text-base px-8 shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/cli-overview">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 hover:border-primary/50">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by developers worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link 
                href="https://github.com/0xshariq/mediaproc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">Star on GitHub</span>
              </Link>
              <Link 
                href="https://discord.gg/Pp7pRs7sJA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-sm font-medium">Join Discord</span>
              </Link>
              <Link 
                href="https://twitter.com/0xshariq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium">Follow @0xshariq</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}