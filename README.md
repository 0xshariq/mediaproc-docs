# MediaProc Documentation

> Official documentation website for MediaProc CLI - built with Next.js 14, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Site:** [https://mediaproc.dev](https://mediaproc.dev)

This is the source code for the MediaProc documentation website, featuring comprehensive guides, API references, and interactive examples for the MediaProc CLI and all its plugins.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# http://localhost:3000
```

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── [slug]/          # Dynamic doc pages
│   └── components/          # React components
│       ├── DocLayout.tsx    # Main docs layout
│       ├── Sidebar.tsx      # Left navigation
│       ├── OnThisPage.tsx   # Right TOC
│       ├── Search.tsx       # Search (Ctrl+K)
│       └── VersionSelector.tsx
├── content/                 # MDX documentation
│   ├── guides/             # User guides
│   ├── plugins/            # Plugin docs
│   ├── api/                # API reference
│   ├── performance.mdx     # Benchmarks
│   ├── faq.mdx            # FAQ
│   └── community/          # Migration guides
├── public/                 # Static assets
│   ├── images/
│   └── icons/
└── tailwind.config.ts      # Tailwind config
```

## ✨ Features

### Documentation Features
- **MDX Support** - Write docs in Markdown with React components
- **Search** - Fuzzy search with Ctrl+K keyboard shortcut
- **Syntax Highlighting** - Code blocks with language detection
- **Table of Contents** - Auto-generated from headings
- **Version Selector** - Switch between CLI versions
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Mode Ready** - Prepared for dark theme

### Developer Features
- **TypeScript** - Full type safety across the project
- **Next.js 14** - App Router with server components
- **Tailwind CSS** - Utility-first styling
- **Hot Reload** - Instant updates during development
- **MDX Components** - Custom components in docs
- **SEO Optimized** - Meta tags, Open Graph, structured data

## 🛠️ Development

### Prerequisites
- Node.js >= 18.0.0
- pnpm (recommended) or npm

### Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build           # Build for production
pnpm start           # Run production build
pnpm lint            # Run ESLint

# Type checking
pnpm type-check      # Check TypeScript types
```

### Adding Documentation

1. **Create MDX file** in `content/` directory:
   ```markdown
   ---
   title: "Your Page Title"
   description: "Page description"
   ---
   
   # Your Content Here
   ```

2. **Add to navigation** in `src/components/Sidebar.tsx`:
   ```typescript
   const navigation = [
     {
       title: "Your Section",
       links: [
         { title: "Your Page", href: "/your-page" }
       ]
     }
   ]
   ```

3. **Preview changes** - Dev server hot reloads automatically


### Components Overview

#### Layout Components
- **DocLayout** - Three-column layout (sidebar, content, TOC)
- **Sidebar** - Left navigation with sections and links
- **OnThisPage** - Right table of contents from headings
- **Header** - Top navigation with logo and version selector

#### Interactive Components
- **Search** - Fuzzy search with keyboard shortcuts (Ctrl+K)
- **VersionSelector** - Dropdown to switch CLI versions
- **CodeBlock** - Syntax-highlighted code with copy button
- **Callout** - Info/warning/tip boxes

#### Custom MDX Components
Use these in your `.mdx` files:

```mdx
<Callout type="info">
  Important information here
</Callout>

<CodeGroup>
  <CodeBlock title="JavaScript">
    // Your code
  </CodeBlock>
  <CodeBlock title="TypeScript">
    // Your code
  </CodeBlock>
</CodeGroup>
```

## 📝 Content Structure

### Documentation Sections

```
content/
├── getting-started/
│   ├── installation.mdx       # Installation guide
│   ├── quick-start.mdx        # Quick start tutorial
│   └── configuration.mdx      # Configuration options
├── guides/
│   ├── image-processing.mdx   # Image guide
│   ├── video-processing.mdx   # Video guide
│   └── audio-processing.mdx   # Audio guide
├── plugins/
│   ├── image/                 # Image plugin docs
│   ├── video/                 # Video plugin docs
│   └── audio/                 # Audio plugin docs
├── api/
│   └── cli-reference.mdx      # CLI command reference
├── community/
│   ├── migration-sharp.mdx    # Migration from ImageMagick
│   ├── migration-ffmpeg.mdx   # Migration from FFmpeg
│   └── contributing.mdx       # Contributing guide
├── performance.mdx            # Performance benchmarks
└── faq.mdx                    # Frequently asked questions
```

### MDX Frontmatter

Every MDX file should include frontmatter:

```yaml
---
title: "Page Title"              # Required
description: "Brief description" # Required
category: "guides"               # Optional
order: 1                         # Optional (for sorting)
lastUpdated: "2026-01-10"       # Optional
---
```

## 🎨 Styling Guide

### Tailwind Classes
- Use semantic Tailwind utilities
- Follow the existing color scheme
- Maintain consistent spacing (4, 6, 8, 12, 16)

### Typography
- Headings: `text-2xl`, `text-xl`, `text-lg`
- Body: `text-base`
- Small: `text-sm`
- Code: `font-mono`

### Layout
- Container: `max-w-7xl mx-auto px-4`
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Flex: `flex items-center justify-between`

## 🔍 Search Functionality

The search component provides:
- **Keyboard shortcut** - Ctrl+K or Cmd+K
- **Fuzzy matching** - Smart scoring algorithm
- **Multi-word search** - Searches across titles and content
- **Navigation** - Arrow keys + Enter to select

### Search Scoring
- Exact match: 100 points
- Starts with query: 50 points
- Contains query: 30 points
- All words present: 20 points
- Individual words: 10/5/3 points (decreasing)

## 🚀 Deployment

### Build for Production

```bash
# Build static site
pnpm build

# Output in .next/ directory
# Deploy to Vercel, Netlify, or any static host
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-XXXXXXXXX-X
```

### Vercel Deployment

1. Connect repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `.next`
4. Deploy automatically on push

## 📊 Performance

- **Lighthouse Score** - 95+ across all metrics
- **Bundle Size** - < 200KB gzipped
- **First Load** - < 1s on 3G
- **Interactive** - < 2s on 3G

## 🧪 Testing

```bash
# Run tests (when implemented)
pnpm test

# Type checking
pnpm type-check

# Lint
pnpm lint
```

## 🤝 Contributing to Documentation

1. **Fork** the repository
2. **Clone** your fork
3. **Create branch** - `git checkout -b docs/your-feature`
4. **Make changes** - Edit or add MDX files
5. **Test locally** - `pnpm dev`
6. **Commit** - `git commit -m "docs: your changes"`
7. **Push** - `git push origin docs/your-feature`
8. **Pull Request** - Open PR to main repo

### Documentation Guidelines

- **Clear & Concise** - Get to the point quickly
- **Code Examples** - Show, don't just tell
- **Consistent Style** - Follow existing patterns
- **Proper Grammar** - Use spell checker
- **Screenshots** - Add visuals when helpful
- **Links** - Reference related pages

## 📦 Dependencies

### Core
- `next` - ^14.0.0
- `react` - ^18.0.0
- `react-dom` - ^18.0.0

### Styling
- `tailwindcss` - ^3.4.0
- `autoprefixer` - ^10.4.0
- `postcss` - ^8.4.0

### Content
- `@next/mdx` - ^14.0.0
- `gray-matter` - ^4.0.0
- `remark-gfm` - ^4.0.0

### Utilities
- `clsx` - ^2.0.0
- `date-fns` - ^3.0.0

## 🔗 Related Links

- **Main CLI Repository** - [github.com/0xshariq/mediaproc-cli](https://github.com/0xshariq/mediaproc-cli)
- **Documentation Site** - [mediaproc.dev](https://mediaproc.dev)
- **NPM Package** - [@mediaproc/cli](https://www.npmjs.com/package/@mediaproc/cli)
- **Contributing Guide** - [CONTRIBUTING.md](../CONTRIBUTING.md)
- **Code of Conduct** - [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)

## 📄 License

MIT © [0xshariq](https://github.com/0xshariq)

---

**Need help?** Open an issue or reach out on [Twitter](https://twitter.com/0xshariq)