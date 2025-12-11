// components/KnockoutBracket.tsx
import React from 'react';
import KnockoutMatchCard from './KnockoutMatchCard';
import { R16_MATCHES, QF_MATCHES, SF_MATCHES, FINAL_MATCH,getWinner } from './knockout';


interface RoundProps {
  title: string;
  matches: typeof R16_MATCHES; // Use the type from fixtures
  roundName: string;
}

// Reusable component for each round
const RoundSection: React.FC<RoundProps> = ({ title, matches, roundName }) => (
  <div className="p-4">
    <h2 className="text-3xl font-extrabold text-blue-400 mb-6 border-b-4 border-blue-400 pb-2">{title}</h2>
    <div className="grid grid-cols-1 gap-6">
      {matches.map((match) => (
        <KnockoutMatchCard
        team1={match.team1}
        team2={match.team2}
        id={match.id}
        score1={Number(match.score1)}
        score2={Number(match.score2)}
        status={match.status}
        flag1={match.flag1}
        flag2={match.flag2}
        pso={match.pso}
        round={roundName}
      />
      ))}
    </div>
  </div>
);

const KnockoutBracket: React.FC = () => {
  const winner = FINAL_MATCH.length > 0 ? getWinner(FINAL_MATCH[0]) : "TBD";

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-12">
        Knockout Stage
      </h1>

      {/* Main Bracket Layout: Uses a flexible grid for desktop view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Round of 16 (R16) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <RoundSection title="Round of 16" matches={R16_MATCHES} roundName="R16" />
        </div>

        {/* Quarter-Finals (QF) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <RoundSection title="Quarter-finals" matches={QF_MATCHES} roundName="QF" />
        </div>

        {/* Semi-Finals (SF) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <RoundSection title="Semi-finals" matches={SF_MATCHES} roundName="SF" />
        </div>

        {/* Final (F) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <RoundSection title="Final" matches={FINAL_MATCH} roundName="Final" />
            {/* You could add the 3rd Place match here too */}
        </div>

      </div>
    </div>
  );
};

export default KnockoutBracket;