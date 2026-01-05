import { notFound } from 'next/navigation';
import { DocLayout } from '@/components/DocLayout';
import { imageCommands } from '@/config/docs-config';
import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { CodeBlock, InlineCode, Alert } from '@/components/CodeBlock';
import remarkGfm from 'remark-gfm';

const components = {
  pre: ({ children }: any) => children,
  code: ({ className, children }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    if (match) {
      return <CodeBlock language={match[1]}>{children}</CodeBlock>;
    }
    return <InlineCode>{children}</InlineCode>;
  },
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => <thead className="bg-muted/50">{children}</thead>,
  tbody: ({ children }: any) => <tbody>{children}</tbody>,
  tr: ({ children }: any) => <tr>{children}</tr>,
  th: ({ children }: any) => (
    <th className="px-4 py-3 text-left font-semibold border border-border text-foreground">{children}</th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 border border-border text-muted-foreground">{children}</td>
  ),
  Alert,
};

export async function generateStaticParams() {
  const paths = [
    { slug: ['introduction'] },
    { slug: ['installation'] },
    { slug: ['quick-start'] },
    { slug: ['cli', 'overview'] },
    { slug: ['cli', 'plugin-management'] },
    { slug: ['cli', 'universal-commands'] },
    { slug: ['plugins', 'image'] },
    { slug: ['community', 'creating-plugins'] },
    { slug: ['community', 'plugin-guidelines'] },
    { slug: ['community', 'contributing'] },
  ];

  // Add all image command pages
  imageCommands.forEach((cmd) => {
    paths.push({ slug: ['plugins', 'image', cmd.slug] });
  });

  return paths;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const contentPath = path.join(process.cwd(), 'content', `${slugPath}.mdx`);

  // Check if file exists
  if (!fs.existsSync(contentPath)) {
    notFound();
  }

  // Read and compile MDX
  const source = fs.readFileSync(contentPath, 'utf-8');
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return <DocLayout>{content}</DocLayout>;
}
