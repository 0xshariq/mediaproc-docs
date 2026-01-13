export interface Command {
  name: string;
  slug: string;
  description: string;
}

export interface Plugin {
  name: string;
  slug: string;
  description: string;
  commands?: Command[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  slug: string;
  children?: NavItem[];
}

export const imageCommands: Command[] = [
  { name: 'affine', slug: 'affine', description: 'Apply affine transformation' },
  { name: 'auto-enhance', slug: 'auto-enhance', description: 'Auto enhance image quality' },
  { name: 'auto-orient', slug: 'auto-orient', description: 'Auto orient based on EXIF' },
  { name: 'batch', slug: 'batch', description: 'Batch process multiple images' },
  { name: 'blur', slug: 'blur', description: 'Apply blur effect' },
  { name: 'boolean', slug: 'boolean', description: 'Boolean operations on images' },
  { name: 'border', slug: 'border', description: 'Add border to images' },
  { name: 'clahe', slug: 'clahe', description: 'Apply CLAHE enhancement' },
  { name: 'composite', slug: 'composite', description: 'Composite images together' },
  { name: 'convert', slug: 'convert', description: 'Convert images between formats' },
  { name: 'convolve', slug: 'convolve', description: 'Apply convolution kernel' },
  { name: 'crop', slug: 'crop', description: 'Crop images to a specific region' },
  { name: 'dilate', slug: 'dilate', description: 'Dilate image regions' },
  { name: 'dominant-color', slug: 'dominant-color', description: 'Get dominant color' },
  { name: 'erode', slug: 'erode', description: 'Erode image regions' },
  { name: 'extend', slug: 'extend', description: 'Extend image canvas with background' },
  { name: 'extract', slug: 'extract', description: 'Extract a region or channel from image' },
  { name: 'flatten', slug: 'flatten', description: 'Flatten image layers' },
  { name: 'flip', slug: 'flip', description: 'Flip images horizontally' },
  { name: 'flop', slug: 'flop', description: 'Flip images vertically' },
  { name: 'gamma', slug: 'gamma', description: 'Adjust gamma correction' },
  { name: 'grayscale', slug: 'grayscale', description: 'Convert to grayscale' },
  { name: 'grid', slug: 'grid', description: 'Create image grid' },
  { name: 'linear', slug: 'linear', description: 'Apply linear adjustment' },
  { name: 'median', slug: 'median', description: 'Apply median filter' },
  { name: 'metadata-cmd', slug: 'metadata-cmd', description: 'View and edit image metadata' },
  { name: 'mirror', slug: 'mirror', description: 'Mirror image' },
  { name: 'modulate', slug: 'modulate', description: 'Adjust brightness, saturation, hue' },
  { name: 'negate', slug: 'negate', description: 'Invert image colors' },
  { name: 'normalize', slug: 'normalize', description: 'Normalize image levels' },
  { name: 'optimize', slug: 'optimize', description: 'Optimize images for web' },
  { name: 'palette', slug: 'palette', description: 'Extract color palette' },
  { name: 'pixelate', slug: 'pixelate', description: 'Apply pixelation effect' },
  { name: 'recomb', slug: 'recomb', description: 'Recombine color channels' },
  { name: 'resize', slug: 'resize', description: 'Resize images to specified dimensions' },
  { name: 'rotate', slug: 'rotate', description: 'Rotate images by degrees' },
  { name: 'sepia', slug: 'sepia', description: 'Apply sepia tone effect' },
  { name: 'sharpen', slug: 'sharpen', description: 'Sharpen image details' },
  { name: 'smart-crop', slug: 'smart-crop', description: 'Smart crop with AI' },
  { name: 'split', slug: 'split', description: 'Split image into parts' },
  { name: 'stack', slug: 'stack', description: 'Stack images together' },
  { name: 'stats', slug: 'stats', description: 'Show image statistics' },
  { name: 'threshold', slug: 'threshold', description: 'Apply threshold effect' },
  { name: 'thumbnail', slug: 'thumbnail', description: 'Generate thumbnails' },
  { name: 'tint', slug: 'tint', description: 'Apply color tint' },
  { name: 'trim', slug: 'trim', description: 'Trim edges of images' },
  { name: 'unflatten', slug: 'unflatten', description: 'Unflatten image' },
  { name: 'vignette', slug: 'vignette', description: 'Apply vignette effect' },
  { name: 'watermark', slug: 'watermark', description: 'Add watermark to images' },
];

export const videoCommands: Command[] = [
  { name: 'compress', slug: 'compress', description: 'Compress video files' },
  { name: 'extract', slug: 'extract', description: 'Extract audio or frames from video' },
  { name: 'merge', slug: 'merge', description: 'Merge multiple video files' },
  { name: 'resize', slug: 'resize', description: 'Resize video dimensions' },
  { name: 'trim', slug: 'trim', description: 'Trim video segments' },
  { name: 'transcode', slug: 'transcode', description: 'Transcode video to different formats' },
];

export const audioCommands: Command[] = [
  { name: 'convert', slug: 'convert', description: 'Convert audio between formats' },
  { name: 'normalize', slug: 'normalize', description: 'Normalize audio volume levels' },
  { name: 'merge', slug: 'merge', description: 'Merge multiple audio files' },
  { name: 'extract', slug: 'extract', description: 'Extract audio from video files' },
  { name: 'trim', slug: 'trim', description: 'Trim audio segments' }
];

export const documentCommands: Command[] = [];

export const animationCommands: Command[] = [];

export const threeDCommands: Command[] = [];

export const streamCommands: Command[] = [];

export const aiCommands: Command[] = [];

export const metadataCommands: Command[] = [];

export const pipelineCommands: Command[] = [];


export const plugins: Plugin[] = [
  {
    name: 'Image',
    slug: 'image',
    description: 'Professional image processing with 49 commands',
    commands: imageCommands,
  },
  {
    name: 'Video',
    slug: 'video',
    description: 'Video processing and transcoding',
    commands: videoCommands,
  },
  {
    name: 'Audio',
    slug: 'audio',
    description: 'Audio processing and conversion',
    commands: audioCommands,
  },
  {
    name: 'Document',
    slug: 'document',
    description: 'Document processing and conversion',
    commands: documentCommands,
  },
  {
    name: 'Animation',
    slug: 'animation',
    description: 'Animation and GIF processing',
    commands: animationCommands,
  },
  {
    name: '3D',
    slug: '3d',
    description: '3D model processing',
    commands: threeDCommands,
  },
  {
    name: 'Stream',
    slug: 'stream',
    description: 'Streaming media processing',
    commands: streamCommands,
  },
  {
    name: 'AI',
    slug: 'ai',
    description: 'AI-powered media processing',
    commands: aiCommands,
  },
  {
    name: 'Metadata',
    slug: 'metadata',
    description: 'Metadata extraction and manipulation',
    commands: metadataCommands,
  },
  {
    name: 'Pipeline',
    slug: 'pipeline',
    description: 'Complex processing pipelines',
    commands: pipelineCommands,
  },
];

export const navigationConfig: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Installation', slug: 'installation' },
      { title: 'First Steps', slug: 'first-steps' },
      { title: 'Basic Concepts', slug: 'basic-concepts' },
      { title: 'Quick Start', slug: 'quick-start' },
      { title: 'Use Cases', slug: 'use-cases' },
    ],
  },
  {
    title: 'CLI',
    items: [
      { title: 'Overview', slug: 'cli/overview' },
      { title: 'Plugin Management', slug: 'cli/plugin-management' },
      { title: 'Universal Commands', slug: 'cli/universal-commands' },
    ],
  },
  {
    title: 'Architecture',
    items: [
      { title: 'Overview', slug: 'architecture/overview' },
      { title: 'CLI Plugins', slug: 'architecture/cli-plugins' },
      { title: 'Image Plugin Architecture', slug: 'architecture/image-plugin' },
      { title: 'Video Plugin Architecture', slug: 'architecture/video-plugin' },
      { title: 'Audio Plugin Architecture', slug: 'architecture/audio-plugin' },
    ]
  },
  {
    title: 'Official Plugins',
    items: plugins.map((plugin) => ({
      title: plugin.name,
      slug: `plugins/${plugin.slug}`,
      children: plugin.commands?.map((cmd) => ({
        title: cmd.name,
        slug: `plugins/${plugin.slug}/${cmd.slug}`,
      })),
    })),
  },
  {
    title: 'Community',
    items: [
      { title: 'Creating Plugins', slug: 'community/creating-plugins' },
      { title: 'Plugin Guidelines', slug: 'community/plugin-guidelines' },
      { title: 'Contributing', slug: 'community/contributing' },
      { title: 'Plugin Integration', slug: 'community/plugin-integration' },
      { title: 'Plugin Ideas', slug: 'community/plugin-ideas' },
    ],
  },
  {
    title: "Migration",
    items: [
      { title: 'Migration: ImageMagick to MediaProc', slug: 'migration/migration-sharp' },
      { title: 'Migration: FFmpeg to MediaProc', slug: 'migration/migration-ffmpeg' },

    ],
  },
  {
    title: 'Performance',
    items: [
      { title: 'Benchmarks', slug: 'performance' },
    ],
  },
  {
    title: 'Help',
    items: [
      { title: 'FAQ', slug: 'faq' },
      { title: 'Troubleshooting', slug: 'troubleshooting' },
    ],
  },
];
