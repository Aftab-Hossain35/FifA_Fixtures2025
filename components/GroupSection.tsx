// components/GroupSection.tsx
import React from 'react';
import MatchCard from './MatchCard';

interface GroupSectionProps {
  groupName: string;
  matches: {
    team1: string;
    team2: string;
    flag1: string;
    flag2: string;
    date?: string;
    time?: string;
    score1: number | string;
    score2: number | string;
  }[];
}

const GroupSection: React.FC<GroupSectionProps> = ({ groupName, matches }) => {
  return (
    <div className="mb-10">
      {/* Group Title */}
      <h2 className="text-3xl font-extrabold text-white mb-6 p-2 rounded-md inline-block shadow-md tracking-wide">
        {groupName}
      </h2>
      
      {/* Matches Grid */}
      <div className="space-y-4"> {/* Use space-y for vertical spacing between cards */}
        {matches.map((match, index) => (
          <MatchCard 
            key={index} 
            team1={match.team1} 
            team2={match.team2} 
            flag1={match.flag1} 
            flag2={match.flag2}
            date={match.date}
            time={match.time}
            score1={match.score1}
            score2={match.score2}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupSection;