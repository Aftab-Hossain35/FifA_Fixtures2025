// components/KnockoutMatchCard.tsx
import React from 'react';
import Image from 'next/image';



interface MatchProps {
  id: number;
  team1: string;
  team2: string;
  score1: number | string;
  score2: number | string;
  status: string;
  flag1: string;
  flag2: string;
  pso?: string | number;
  round: string;
}

const KnockoutMatchCard: React.FC<MatchProps> = ({ id, team1, team2, score1, score2, status, pso, round, flag1, flag2 }) => {
  const s1 = typeof score1 === 'string' ? parseInt(score1, 10) : score1;
  const s2 = typeof score2 === 'string' ? parseInt(score2, 10) : score2;
  const psoParts = typeof pso === 'string' ? pso.split('-').map(part => parseInt(part.trim(), 10)) : [];
  const p1 = psoParts[0];
  const p2 = psoParts[1];
  const hasScores = Number.isFinite(s1) && Number.isFinite(s2);
  const hasPSO = Number.isFinite(p1) && Number.isFinite(p2);
  const isTeam1Winner = (hasScores && s1 > s2) || (hasPSO && p1 > p2);
  const isTeam2Winner = (hasScores && s2 > s1) || (hasPSO && p2 > p1);
  const winnerClass = "font-bold text-yellow-400";
  const loserClass = "text-gray-400";
  const scoreClass = "text-green-500";
  
  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg mb-4 border border-gray-700 hover:border-blue-500 transition duration-200 w-auto">
      <div className="text-xs text-gray-500 mb-2">{round} - Match {id}</div>
      
      {/* Team 1 Row */}
      <div className="flex justify-between items-center text-white mb-1">
        <div className="flex items-center">
          <Image src={flag1} alt={`${team1} flag`} width={5} height={10} className="w-8 h-5 object-cover mr-2 rounded-sm border text-amber-100 border-gray-600"/>
          <span className={isTeam1Winner ? winnerClass : loserClass}>{team1}</span>
        </div>
        <span className={scoreClass}>
          {score1}
          {hasPSO && isTeam1Winner && <span className="text-xs text-gray-400 ml-1">({p1})</span>}
        </span>
      </div>

      {/* Team 2 Row */}
      <div className="flex justify-between items-center text-white">
        <div className="flex items-center">
          <Image src={flag2} alt={`${team2} flag`} width={5} height={10} className="w-8 h-5 object-cover mr-2 rounded-sm border text-amber-100 border-gray-600" />
          <span className={isTeam2Winner ? winnerClass : loserClass}>{team2}</span>
        </div>
        <span className={scoreClass}>
          {score2}
          {hasPSO && isTeam2Winner && <span className="text-xs text-gray-400 ml-1">({p2})</span>}
        </span>
      </div>

      {/* Status Footer */}
      <div className="text-right text-sm mt-2 text-red-500 font-semibold border-t border-gray-700 pt-1">
        {status} {hasPSO && `(PSO)`}
      </div>
    </div>
  );
};

export default KnockoutMatchCard;
