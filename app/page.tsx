// app/page.tsx
import React from 'react';
import GroupSection from '../components/GroupSection';
import { ALL_GROUPS_FIXTURES } from '@/components/Fixture_dataA'; // Adjust path if needed
import KnockoutBracket from '../components/KnockoutBracket';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-8 sm:p-12 md:p-16"> {/* Darker background */}
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
        FIFA World Cup 2025
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Loop through all defined groups */}
      {ALL_GROUPS_FIXTURES.map((groupData, index) => (
        <GroupSection 
          key={index} 
          groupName={groupData.groupName} 
          matches={groupData.matches} 
        />
      ))}
    </div>
        <KnockoutBracket />
    </main>
  );
}