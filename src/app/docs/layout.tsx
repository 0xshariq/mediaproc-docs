import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - MediaProc",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
