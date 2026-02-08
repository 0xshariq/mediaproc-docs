import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 text-center overflow-hidden">
        {/* Background gradients with animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="inline-flex items-center bg-muted border border-border px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-105 cursor-default">
          <span className="mr-2 text-primary animate-pulse">●</span>
          <span className="font-medium">Launching Soon</span>
          <span className="mx-2 text-border">•</span>
          <span className="text-muted-foreground">Developer Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          The Complete
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Developer Ecosystem
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Automation. Media Processing. Project Generation. Secure Storage. AI Assistance.
          <br className="hidden sm:block" />
          <span className="text-foreground font-semibold">All in one unified developer experience.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="group w-full sm:w-auto text-base px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 hover:border-primary/50 transition-all hover:scale-105">
            View Roadmap
          </Button>
        </div>

        {/* Ecosystem Products Preview */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-16 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-default">
            <span className="text-2xl">⚡</span>
            <span className="font-medium">Orbyt</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:border-blue-500/50 transition-all hover:scale-105 cursor-default">
            <span className="text-2xl">🎬</span>
            <span className="font-medium">MediaProc</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:border-purple-500/50 transition-all hover:scale-105 cursor-default">
            <span className="text-2xl">🔨</span>
            <span className="font-medium">DevForge</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:border-green-500/50 transition-all hover:scale-105 cursor-default">
            <span className="text-2xl">🔐</span>
            <span className="font-medium">Vaulta</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:border-orange-500/50 transition-all hover:scale-105 cursor-default">
            <span className="text-2xl">🤖</span>
            <span className="font-medium">Dev Companion</span>
          </div>
        </div>

        {/* Coming Soon Terminal Preview */}
        <div style={{ animationDelay: '0.8s' }} className="animate-fade-in">
          <Terminal
            className="max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all"
            commands={[
              { command: '# The developer ecosystem is launching soon...' },
              { command: 'npm install -g @dev-ecosystem/cli' },
              { output: '⚡ Preparing the future of development...', isSuccess: true },
              { command: '\n# Automation workflows' },
              { output: '✓ Orbyt - Workflow automation engine', isSuccess: true },
              { command: '\n# Media processing' },
              { output: '✓ MediaProc - Universal media processing', isSuccess: true },
              { command: '\n# Project scaffolding' },
              { output: '✓ DevForge - Intelligent project generation', isSuccess: true },
              { command: '\n# Stay tuned for more...' },
            ]}
          />
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why We&apos;re Building This
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Developers juggle too many tools. CLIs don&apos;t talk to each other. Workflows are scattered across scripts, 
              bash files, and manual commands. Security is an afterthought.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
              We&apos;re building a unified ecosystem where automation, media processing, project generation, and secure storage 
              work together seamlessly—designed for developers, by developers.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Products */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Five Products. One Ecosystem.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each powerful on its own. Unstoppable together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Orbyt */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl cursor-default">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Orbyt</h3>
            <p className="text-muted-foreground mb-4">
              Workflow automation engine. Build, schedule, and execute complex automation with YAML workflows.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <span>Coming Soon</span>
              <span className="animate-pulse">→</span>
            </div>
          </Card>

          {/* MediaProc */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-border bg-card hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-xl cursor-default">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">MediaProc</h3>
            <p className="text-muted-foreground mb-4">
              Universal media processing. One CLI for images, videos, audio, and documents. Plugin-based and extensible.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <span>Coming Soon</span>
              <span className="animate-pulse">→</span>
            </div>
          </Card>

          {/* DevForge */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-border bg-card hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-xl cursor-default">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔨</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">DevForge</h3>
            <p className="text-muted-foreground mb-4">
              Intelligent project scaffolding. Generate full-stack projects with best practices, configurations, and tooling.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-500 font-medium">
              <span>Coming Soon</span>
              <span className="animate-pulse">→</span>
            </div>
          </Card>

          {/* Vaulta */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-border bg-card hover:border-green-500/50 transition-all hover:scale-105 hover:shadow-xl cursor-default">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">Vaulta</h3>
            <p className="text-muted-foreground mb-4">
              Encrypted secret storage. Zero-knowledge security for API keys, credentials, and sensitive data.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
              <span>Coming Soon</span>
              <span className="animate-pulse">→</span>
            </div>
          </Card>

          {/* Dev Companion */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-border bg-card hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-xl cursor-default">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">Dev Companion</h3>
            <p className="text-muted-foreground mb-4">
              AI-powered development assistant. Understands your ecosystem, helps you build workflows, and automates tasks.
            </p>
            <div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <span>Coming Soon</span>
              <span className="animate-pulse">→</span>
            </div>
          </Card>

          {/* More Coming */}
          <Card className="group p-6 lg:p-8 rounded-xl border-2 border-dashed border-border bg-muted/30 hover:border-primary/50 transition-all hover:scale-105 cursor-default">
            <div className="text-4xl mb-4 opacity-50">✨</div>
            <h3 className="text-xl font-bold mb-2 text-muted-foreground">More Coming...</h3>
            <p className="text-muted-foreground mb-4">
              We&apos;re just getting started. The ecosystem will grow with your feedback and needs.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span>Stay Tuned</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Built for Modern Development
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, automate, and ship faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">🔗</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Unified Experience</h3>
                <p className="text-muted-foreground">
                  All tools share the same CLI patterns, configuration format, and authentication system.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Developer First</h3>
                <p className="text-muted-foreground">
                  Designed by developers who understand the pain of context switching and tool fragmentation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">🔒</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Security Built-In</h3>
                <p className="text-muted-foreground">
                  Zero-knowledge encryption, local-first secrets, and enterprise-grade security from day one.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Automation Native</h3>
                <p className="text-muted-foreground">
                  Every tool is built to be automated. Create workflows that span multiple products seamlessly.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">🧩</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Extensible</h3>
                <p className="text-muted-foreground">
                  Plugin architecture, custom adapters, and marketplace for community extensions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
              <div className="text-3xl group-hover:scale-110 transition-transform">🌐</div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Open Source</h3>
                <p className="text-muted-foreground">
                  Core tools are open source. Transparent development. Community-driven evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Launch Timeline
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              We&apos;re launching products progressively. Here&apos;s what&apos;s coming.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="shrink-0 w-24 text-right">
                <span className="text-sm font-bold text-primary">Q1 2026</span>
              </div>
              <div className="shrink-0 w-4 h-4 rounded-full bg-primary mt-1 group-hover:scale-150 transition-transform"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Orbyt Engine</h3>
                <p className="text-muted-foreground">Core workflow automation engine with CLI, YAML workflows, and adapters.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="shrink-0 w-24 text-right">
                <span className="text-sm font-bold text-blue-500">Q1 2026</span>
              </div>
              <div className="shrink-0 w-4 h-4 rounded-full bg-blue-500 mt-1 group-hover:scale-150 transition-transform"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">MediaProc Beta</h3>
                <p className="text-muted-foreground">Image and video processing plugins with CLI interface.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="shrink-0 w-24 text-right">
                <span className="text-sm font-bold text-purple-500">Q2 2026</span>
              </div>
              <div className="shrink-0 w-4 h-4 rounded-full bg-purple-500/50 mt-1 group-hover:scale-150 transition-transform"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">DevForge & Vaulta</h3>
                <p className="text-muted-foreground">Project scaffolding and secure credential storage.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="shrink-0 w-24 text-right">
                <span className="text-sm font-bold text-orange-500">Q2 2026</span>
              </div>
              <div className="shrink-0 w-4 h-4 rounded-full bg-orange-500/50 mt-1 group-hover:scale-150 transition-transform"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dev Companion</h3>
                <p className="text-muted-foreground">AI assistant that understands the entire ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Early Access
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to try the ecosystem. Join our beta program and shape the future of developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-96"
              />
              <Button size="lg" className="px-8 transition-all hover:scale-105 shadow-lg whitespace-nowrap w-full sm:w-auto">
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Just updates on launches and early access invites.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            The Future of Development
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
            One ecosystem. Infinite possibilities.
            <br />
            Built for developers who refuse to compromise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group px-10 py-6 text-lg font-bold transition-all hover:scale-105 shadow-2xl hover:shadow-3xl w-full sm:w-auto">
              Join the Movement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="https://github.com/0xshariq" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg font-semibold transition-all hover:scale-105 border-2 border-border w-full sm:w-auto">
                <Github className="mr-2 w-5 h-5" />
                Star on GitHub
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Community Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Free Core Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
