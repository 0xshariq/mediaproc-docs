import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ExternalLink, Package, Github, Book, Zap } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  href: string;
}

interface PluginOverviewProps {
  name: string;
  description: string;
  purpose: string;
  installation: string;
  npmPackage: string;
  githubRepo?: string;
  version: string;
  commands: Command[];
  features: string[];
  useCases: string[];
}

export function PluginOverview({
  name,
  description,
  purpose,
  installation,
  npmPackage,
  githubRepo,
  version,
  commands,
  features,
  useCases
}: PluginOverviewProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">{name} Plugin</h1>
          <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
            v{version}
          </span>
        </div>
        <p className="text-xl text-muted-foreground">{description}</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 hover-lift">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">NPM Package</h3>
              <a 
                href={`https://www.npmjs.com/package/${npmPackage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                {npmPackage}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Card>

        {githubRepo && (
          <Card className="p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Source Code</h3>
                <a 
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Purpose */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          Purpose
        </h2>
        <p className="text-muted-foreground">{purpose}</p>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <div className="bg-card border rounded-lg p-4">
          <code className="text-sm">{installation}</code>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-4">
              <p className="text-sm text-muted-foreground">{useCase}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Commands */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Available Commands</h2>
        <p className="text-muted-foreground mb-6">
          Click on any command to view detailed documentation, examples, and usage instructions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commands.map((command) => (
            <Link key={command.name} href={command.href}>
              <Card className="p-4 hover-lift h-full cursor-pointer group">
                <h3 className="font-mono font-semibold mb-2 group-hover:text-primary transition-colors">
                  {command.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {command.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Start Example</h2>
        <div className="bg-card border rounded-lg p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">1. Install the plugin:</p>
            <code className="text-sm bg-muted px-3 py-1 rounded">{installation}</code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">2. Run your first command:</p>
            <code className="text-sm bg-muted px-3 py-1 rounded">
              mediaproc {name.toLowerCase()} {commands[0]?.name} input.jpg -o output.jpg
            </code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Check out the command documentation above for more advanced usage and examples.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
