'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

export default function TabLayout({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              'px-4 py-2 font-medium transition-colors border-b-2',
              activeTab === index
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-primary',
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
