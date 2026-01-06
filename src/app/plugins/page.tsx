import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Image,
  Video,
  Music,
  Film,
  Box,
  Brain,
  FileText,
  Info,
  Workflow,
  Radio,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';

export const metadata = {
  title: 'Plugins - MediaProc',
  description: 'Explore all MediaProc plugins for image, video, audio, and more media processing.',
};

interface Plugin {
  id: string;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  status: 'available' | 'coming-soon';
  commandCount?: number;
  link?: string;
  features: string[];
}

const plugins: Plugin[] = [
  {
    id: 'image',
    name: 'Image Plugin',
    description: 'Comprehensive image processing with 51 commands for resizing, converting, effects, and optimization.',
    icon: Image,
    status: 'available',
    commandCount: 51,
    link: '/docs/plugins/image',
    features: ['Resize & Crop', 'Format Conversion', 'Effects & Filters', 'Optimization', 'Watermarking']
  },
  {
    id: 'video',
    name: 'Video Plugin',
    description: 'Professional video processing including conversion, trimming, compression, and effects.',
    icon: Video,
    status: 'available',
    commandCount: 6,
    link: '/docs/plugins/video',
    features: ['Format Conversion', 'Trimming & Cutting', 'Compression', 'Effects', 'Metadata']
  },
  {
    id: 'audio',
    name: 'Audio Plugin',
    description: 'Audio processing for conversion, normalization, merging, and extraction.',
    icon: Music,
    status: 'coming-soon',
    commandCount: 15,
    link: '/docs/plugins/audio',
    features: ['Format Conversion', 'Normalize', 'Merge & Split', 'Extract Audio', 'Trim']
  },
  {
    id: 'animation',
    name: 'Animation Plugin',
    description: 'Create and optimize animated GIFs and WebP animations from videos or image sequences.',
    icon: Film,
    status: 'coming-soon',
    commandCount: 8,
    link: '/docs/plugins/animation',
    features: ['GIF Creation', 'WebP Animation', 'Optimization', 'Frame Control']
  },
  {
    id: '3d',
    name: '3D Plugin',
    description: 'Process 3D models, textures, and assets for web and game development.',
    icon: Box,
    status: 'coming-soon',
    commandCount: 12,
    link: '/docs/plugins/3d',
    features: ['Model Conversion', 'Texture Compression', 'LOD Generation', 'Optimization']
  },
  {
    id: 'ai',
    name: 'AI Plugin',
    description: 'AI-powered media processing including background removal, captioning, and scene detection.',
    icon: Brain,
    status: 'coming-soon',
    commandCount: 10,
    link: '/docs/plugins/ai',
    features: ['Background Removal', 'Auto Captioning', 'Scene Detection', 'Face Blur']
  },
  {
    id: 'document',
    name: 'Document Plugin',
    description: 'Process documents, PDFs, and text files with conversion and optimization.',
    icon: FileText,
    status: 'coming-soon',
    commandCount: 8,
    link: '/docs/plugins/document',
    features: ['PDF Operations', 'Format Conversion', 'Text Extraction', 'Compression']
  },
  {
    id: 'metadata',
    name: 'Metadata Plugin',
    description: 'Extract, edit, and manage metadata across all media types.',
    icon: Info,
    status: 'coming-soon',
    commandCount: 6,
    link: '/docs/plugins/metadata',
    features: ['EXIF Data', 'IPTC Info', 'XMP Metadata', 'Batch Operations']
  },
  {
    id: 'pipeline',
    name: 'Pipeline Plugin',
    description: 'Create complex processing workflows with chained operations.',
    icon: Workflow,
    status: 'coming-soon',
    commandCount: 5,
    link: '/docs/plugins/pipeline',
    features: ['Chain Commands', 'Parallel Processing', 'Conditional Logic', 'Batch Workflows']
  },
  {
    id: 'stream',
    name: 'Stream Plugin',
    description: 'Process media streams and live content in real-time.',
    icon: Radio,
    status: 'coming-soon',
    commandCount: 7,
    link: '/docs/plugins/stream',
    features: ['Live Processing', 'Stream Capture', 'Real-time Effects', 'Broadcasting']
  },
  {
    id: 'effects',
    name: 'Effects Plugin',
    description: 'Advanced visual effects and creative filters for images and videos.',
    icon: Sparkles,
    status: 'coming-soon',
    features: ['Artistic Filters', 'Color Grading', 'Vintage Effects', 'Glitch Art']
  },
  {
    id: 'ml',
    name: 'Machine Learning Plugin',
    description: 'Deep learning models for content analysis, enhancement, and generation.',
    icon: Brain,
    status: 'coming-soon',
    features: ['Image Enhancement', 'Style Transfer', 'Super Resolution', 'Object Detection']
  },
  {
    id: 'social',
    name: 'Social Media Plugin',
    description: 'Optimize and format media for all major social media platforms.',
    icon: Layers,
    status: 'coming-soon',
    features: ['Auto Sizing', 'Platform Templates', 'Watermarking', 'Batch Export']
  },
  {
    id: 'compress',
    name: 'Compression Plugin',
    description: 'Advanced compression algorithms for maximum file size reduction.',
    icon: Zap,
    status: 'coming-soon',
    features: ['Smart Compression', 'Format Optimization', 'Lossless Options', 'Quality Presets']
  }
];

export default function PluginsPage() {
  const availablePlugins = plugins.filter(p => p.status === 'available');
  const comingSoonPlugins = plugins.filter(p => p.status === 'coming-soon');

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">MediaProc Plugins</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Extend MediaProc with powerful plugins for every media processing need.
          From images to videos, audio to 3D models - we&apos;ve got you covered.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-primary mb-2">{availablePlugins.length}</div>
          <div className="text-sm text-muted-foreground">Available Plugins</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            {availablePlugins.reduce((sum, p) => sum + (p.commandCount || 0), 0)}+
          </div>
          <div className="text-sm text-muted-foreground">Total Commands</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-primary mb-2">{comingSoonPlugins.length}</div>
          <div className="text-sm text-muted-foreground">Coming Soon</div>
        </Card>
      </div>

      {/* Available Plugins */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Available Plugins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availablePlugins.map((plugin) => {
            const Icon = plugin.icon;
            return (
              <Card
                key={plugin.id}
                className="p-6 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  {plugin.commandCount && (
                    <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {plugin.commandCount} commands
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{plugin.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 min-h-12">
                  {plugin.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">KEY FEATURES</div>
                  <ul className="space-y-1">
                    {plugin.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={plugin.link || '#'}>
                  <Button className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Coming Soon */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonPlugins.map((plugin) => {
            const Icon = plugin.icon;
            return (
              <Card
                key={plugin.id}
                className="p-6 opacity-60 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-muted">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded-full">
                    Soon
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{plugin.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {plugin.description}
                </p>

                <ul className="space-y-1">
                  {plugin.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="text-xs flex items-center text-muted-foreground">
                      <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <Card className="p-12 bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Plugin?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            MediaProc&apos;s plugin system is designed to be extensible.
            Create your own plugins or request features for future releases.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/docs/plugin-system">
              <Button size="lg">
                Plugin Development Guide
              </Button>
            </Link>
            <Link href="https://github.com/0xshariq/mediaproc-cli/issues">
              <Button size="lg" variant="outline">
                Request a Plugin
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
