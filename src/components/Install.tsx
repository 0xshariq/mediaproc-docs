'use client';

import React, { useState } from 'react';
import { Terminal } from './Terminal';

interface InstallProps {
  package?: string;
  title?: string;
  global?: boolean;
  dev?: boolean;
}

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export function Install({ 
  package: packageName = '@mediaproc/cli', 
  title,
  global = false,
  dev = false
}: InstallProps) {
  const [activeTab, setActiveTab] = useState<PackageManager>('npm');

  const getCommand = (pm: PackageManager): string => {
    const flags = [];
    
    if (global) {
      flags.push('-g');
    }
    
    if (dev) {
      if (pm === 'npm' || pm === 'bun') {
        flags.push('--save-dev');
      } else if (pm === 'pnpm') {
        flags.push('-D');
      } else if (pm === 'yarn') {
        flags.push('--dev');
      }
    }

    const flagStr = flags.length > 0 ? ' ' + flags.join(' ') : '';

    switch (pm) {
      case 'npm':
        return `npm install${flagStr} ${packageName}`;
      case 'pnpm':
        return `pnpm add${flagStr} ${packageName}`;
      case 'yarn':
        return `yarn add${flagStr} ${packageName}`;
      case 'bun':
        return `bun add${flagStr} ${packageName}`;
    }
  };

  return (
    <div className="my-6">
      {title && (
        <p className="text-sm text-muted-foreground mb-3">{title}</p>
      )}
      <div className="border border-border rounded-lg overflow-hidden bg-background">
        {/* Tabs */}
        <div className="flex border-b border-border bg-muted/30">
          {(['npm', 'pnpm', 'yarn', 'bun'] as PackageManager[]).map((pm) => (
            <button
              key={pm}
              onClick={() => setActiveTab(pm)}
              className={`
                px-4 py-2 text-sm font-medium transition-colors relative
                ${activeTab === pm 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {pm}
              {activeTab === pm && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Command Display */}
        <div className="p-0">
          <Terminal 
            commands={[
              { command: getCommand(activeTab) }
            ]}
            showCopy={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Install;
