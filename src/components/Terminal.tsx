'use client';

import { Card } from '@/components/ui/card';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export interface TerminalCommand {
    command?: string;
    output?: string;
    isSuccess?: boolean;
    isError?: boolean;
}

interface TerminalProps {
    commands: TerminalCommand[];
    title?: string;
    className?: string;
    showCopy?: boolean;
}

export function Terminal({ commands, title = 'Terminal', className = '', showCopy = true }: TerminalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = commands
            .filter((cmd) => cmd.command)
            .map((cmd) => cmd.command)
            .join('\n');

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card className={`p-6 bg-card border-border hover-lift ${className} mb-4 mt-4`}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-muted-foreground ml-4">{title}</span>
                </div>
                {showCopy && (
                    <button
                        onClick={handleCopy}
                        className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
                        aria-label="Copy commands"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-green-500" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                    </button>
                )}
            </div>
            <div className="text-left font-mono text-sm space-y-2">
                {commands.map((cmd, index) => (
                    <div key={index}>
                        {cmd.command && (
                            <div>
                                <span className="text-primary">$</span>{' '}
                                <span className="text-foreground">{cmd.command}</span>
                            </div>
                        )}
                        {cmd.output && (
                            <div className={
                                cmd.isError
                                    ? 'text-red-400'
                                    : cmd.isSuccess
                                        ? 'text-green-400'
                                        : 'text-muted-foreground'
                            }>
                                {cmd.output}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}

// Simple version for inline code blocks
interface InlineTerminalProps {
    command: string;
    className?: string;
    showCopy?: boolean;
}

export function InlineTerminal({ command, className = '', showCopy = true }: InlineTerminalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className={`bg-muted/50 px-4 py-3 rounded-lg font-mono text-sm border border-border ${className}`}>
            <span className="text-primary">$</span>{' '}
            <span className="text-foreground">{command}</span>
            {showCopy && (
                <button
                    onClick={handleCopy}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
                    aria-label="Copy commands"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </button>
            )}
        </div>
    );
}
