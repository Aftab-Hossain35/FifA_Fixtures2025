// components/MatchCard.tsx
import Image from "next/image";
import React from "react";

interface MatchProps {
  team1: string;
  team2: string;
  flag1: string;
  flag2: string;
  date?: string; // Optional for upcoming matches
  time?: string; // Optional for upcoming matches
  score1?: string; // Optional for completed matches
  score2?: string; // Optional for completed matches
}

const MatchCard: React.FC<MatchProps> = ({ team1, team2, flag1, flag2, date, time, score1, score2 }) => {
  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg mb-4 border border-gray-700 hover:border-blue-500 transition duration-200 w-auto">
      {/* Team 1 */}
      <div className="flex justify-between items-center text-white mb-1">
        <div className="flex items-center">
        {flag1 && (
          <Image src={flag1} alt={`${team1} flag`} width={32} height={20} className="w-8 h-5 object-cover mr-2 rounded-sm border text-amber-100 border-gray-600" />
        )}
        <span className="font-semibold text-md">{team1} </span>
        </div>
        <span className="text-gray-20 mr-64">{score1}</span> 
      </div>

      {/* Score Placeholder / Time */}
      {/* <div className="flex justify-between items-center text-white">
        <span className="text-gray-20">{score1 != undefined && score2 != undefined ? `${score1}-${score2}` : " - "}</span> 
      
      </div> */}

      {/* Team 2 */}
      <div className="flex justify-between items-center text-white mb-1">
        <div className="flex items-center">
      {flag2 && (
          <Image src={flag2} alt={`${team2} flag`} width={32} height={20} className="w-8 h-5 object-cover mr-2 rounded-sm border border-gray-600" />
        )}
        <span className="font-semibold text-md">{team2}</span>
        </div>
        <span className="text-gray-20 mr-64">{score2}</span> 
      </div>
    </div>
  );
};

export default MatchCard;