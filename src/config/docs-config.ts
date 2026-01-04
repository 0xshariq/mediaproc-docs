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
  // Transform & Resize
  { name: 'resize', slug: 'resize', description: 'Resize images to specified dimensions' },
  { name: 'crop', slug: 'crop', description: 'Crop images to a specific region' },
  { name: 'rotate', slug: 'rotate', description: 'Rotate images by degrees' },
  { name: 'flip', slug: 'flip', description: 'Flip images horizontally' },
  { name: 'flop', slug: 'flop', description: 'Flip images vertically' },
  { name: 'trim', slug: 'trim', description: 'Trim edges of images' },
  { name: 'extend', slug: 'extend', description: 'Extend image canvas with background' },
  { name: 'extract', slug: 'extract', description: 'Extract a region or channel from image' },
  { name: 'affine', slug: 'affine', description: 'Apply affine transformation' },
  { name: 'composite', slug: 'composite', description: 'Composite images together' },

  // Format & Conversion
  { name: 'convert', slug: 'convert', description: 'Convert images between formats' },
  { name: 'optimize', slug: 'optimize', description: 'Optimize images for web' },

  // Effects & Filters
  { name: 'blur', slug: 'blur', description: 'Apply blur effect' },
  { name: 'sharpen', slug: 'sharpen', description: 'Sharpen image details' },
  { name: 'grayscale', slug: 'grayscale', description: 'Convert to grayscale' },
  { name: 'sepia', slug: 'sepia', description: 'Apply sepia tone effect' },
  { name: 'negate', slug: 'negate', description: 'Invert image colors' },
  { name: 'normalize', slug: 'normalize', description: 'Normalize image levels' },
  { name: 'median', slug: 'median', description: 'Apply median filter' },
  { name: 'clahe', slug: 'clahe', description: 'Apply CLAHE enhancement' },
  { name: 'convolve', slug: 'convolve', description: 'Apply convolution kernel' },
  { name: 'recomb', slug: 'recomb', description: 'Recombine color channels' },

  // Color Adjustments
  { name: 'modulate', slug: 'modulate', description: 'Adjust brightness, saturation, hue' },
  { name: 'tint', slug: 'tint', description: 'Apply color tint' },
  { name: 'gamma', slug: 'gamma', description: 'Adjust gamma correction' },
  { name: 'linear', slug: 'linear', description: 'Apply linear adjustment' },
  { name: 'threshold', slug: 'threshold', description: 'Apply threshold effect' },

  // Overlays & Borders
  { name: 'watermark', slug: 'watermark', description: 'Add watermark to images' },
  { name: 'border', slug: 'border', description: 'Add border to images' },

  // Metadata & Info
  { name: 'metadata-cmd', slug: 'metadata-cmd', description: 'View and edit image metadata' },
  { name: 'stats', slug: 'stats', description: 'Show image statistics' },

  // Batch & Smart Operations
  { name: 'batch', slug: 'batch', description: 'Batch process multiple images' },
  { name: 'thumbnail', slug: 'thumbnail', description: 'Generate thumbnails' },
  { name: 'smart-crop', slug: 'smart-crop', description: 'Smart crop with AI' },
  { name: 'auto-enhance', slug: 'auto-enhance', description: 'Auto enhance image quality' },
  { name: 'auto-orient', slug: 'auto-orient', description: 'Auto orient based on EXIF' },

  // Image Manipulation
  { name: 'flatten', slug: 'flatten', description: 'Flatten image layers' },
  { name: 'unflatten', slug: 'unflatten', description: 'Unflatten image' },
  { name: 'boolean', slug: 'boolean', description: 'Boolean operations on images' },
  { name: 'mirror', slug: 'mirror', description: 'Mirror image' },
  { name: 'pixelate', slug: 'pixelate', description: 'Apply pixelation effect' },
  { name: 'vignette', slug: 'vignette', description: 'Apply vignette effect' },

  // Advanced Operations
  { name: 'grid', slug: 'grid', description: 'Create image grid' },
  { name: 'stack', slug: 'stack', description: 'Stack images together' },
  { name: 'split', slug: 'split', description: 'Split image into parts' },
  { name: 'palette', slug: 'palette', description: 'Extract color palette' },
  { name: 'dominant-color', slug: 'dominant-color', description: 'Get dominant color' },
  { name: 'dilate', slug: 'dilate', description: 'Dilate image regions' },
  { name: 'erode', slug: 'erode', description: 'Erode image regions' },
];

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
    commands: [],
  },
  {
    name: 'Audio',
    slug: 'audio',
    description: 'Audio processing and conversion',
    commands: [],
  },
  {
    name: 'Document',
    slug: 'document',
    description: 'Document processing and conversion',
    commands: [],
  },
  {
    name: 'Animation',
    slug: 'animation',
    description: 'Animation and GIF processing',
    commands: [],
  },
  {
    name: '3D',
    slug: '3d',
    description: '3D model processing',
    commands: [],
  },
  {
    name: 'Stream',
    slug: 'stream',
    description: 'Streaming media processing',
    commands: [],
  },
  {
    name: 'AI',
    slug: 'ai',
    description: 'AI-powered media processing',
    commands: [],
  },
  {
    name: 'Metadata',
    slug: 'metadata',
    description: 'Metadata extraction and manipulation',
    commands: [],
  },
  {
    name: 'Pipeline',
    slug: 'pipeline',
    description: 'Complex processing pipelines',
    commands: [],
  },
];

export const navigationConfig: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Installation', slug: 'installation' },
      { title: 'Quick Start', slug: 'quick-start' },
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
    ],
  },
];
