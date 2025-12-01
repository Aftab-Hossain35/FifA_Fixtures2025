// components/KnockoutMatchCard.tsx
import React from 'react';
import Image from 'next/image';



interface MatchProps {
  id: number;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: string;
  pso?: string;
  round: string;
  flag1: string;
  flag2: string;
}

const KnockoutMatchCard: React.FC<MatchProps> = ({ id, team1, team2, score1, score2, status, pso, round, flag1, flag2 }) => {
  const isTeam1Winner = score1 > score2 || (pso && pso.split('-')[0] > pso.split('-')[1]);
  const isTeam2Winner = score2 > score1 || (pso && pso.split('-')[1] > pso.split('-')[0]);
  const winnerClass = "font-bold text-yellow-400";
  const loserClass = "text-gray-400";
  const scoreClass = "text-green-500";
  
  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg mb-4 border border-gray-700 hover:border-blue-500 transition duration-200">
      <div className="text-xs text-gray-500 mb-2">{round} - Match {id}</div>
      
      {/* Team 1 Row */}
      <div className="flex justify-between items-center text-white mb-1">
        <div className="flex items-center">
          <Image src={flag1} alt={`${team1} flag`} width={20} height={20} className="mr-2" />
          <span className={isTeam1Winner ? winnerClass : loserClass}>{team1}</span>
        </div>
        <span className={scoreClass}>
          {score1}
          {pso && isTeam1Winner && <span className="text-xs text-gray-400 ml-1">({pso.split('-')[0]})</span>}
        </span>
      </div>

      {/* Team 2 Row */}
      <div className="flex justify-between items-center text-white">
        <div className="flex items-center">
          <Image src={flag2} alt={`${team2} flag`} width={20} height={20} className="mr-2" />
          <span className={isTeam2Winner ? winnerClass : loserClass}>{team2}</span>
        </div>
        <span className={scoreClass}>
          {score2}
          {pso && isTeam2Winner && <span className="text-xs text-gray-400 ml-1">({pso.split('-')[1]})</span>}
        </span>
      </div>

      {/* Status Footer */}
      <div className="text-right text-sm mt-2 text-red-500 font-semibold border-t border-gray-700 pt-1">
        {status} {pso && `(PSO)`}
      </div>
    </div>
  );
};

export default KnockoutMatchCard;