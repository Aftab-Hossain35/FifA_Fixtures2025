// knockoutFixtures.js


// Placeholder structure for Round of 16 (R16) matches
export const getWinner = (match: any) => {
  if (match.score1 > match.score2) return match.team1;
  if (match.score2 > match.score1) return match.team2;
  return match.psoWinner ?? "TBD";
};

export const R16_MATCHES = [
  // Assumes Group A Winner (1A), Group B Runner-up (2B), etc.
  { id: 25, team1: "Belgium", team2: "Netherland", score1: "2", score2: "1", status: "FT", flag1: "/flags/Flag_of_Belgium_(1830).svg.png",flag2: "/flags/netherland.png",},
  { id: 26, team1: "Germany", team2: "Newzealand", score1: "2", score2: "1", status: "FT",flag1: "/flags/1200px-Flag_of_Germany.svg.png",flag2: "/flags/new_zealand.png", },
  { id: 27, team1: "England", team2: "Denmark", score1: "4", score2: "2", status: "FT", flag1: "/flags/eng.jpg",flag2: "/flags/denmark-paper-flag-patriotic-background-national-138241023.jpg", },
  { id: 28, team1: "Italy", team2: "Egypt", score1: "0", score2: "0",pso: "4-1", status: "FT",flag1: "/flags/Flag_of_Italy.svg.png",flag2: "/flags/flag of egypt.jpg", },
  { id: 29, team1: "France", team2: "Spain", score1: "1", score2: "4", status: "FT",flag1: "/flags/R.jpg",flag2: "/flags/Flag-Spain.jpg", },
  { id: 30, team1: "Argentina", team2: "South Korea", score1: "2", score2: "0", status: "FT",flag1: "/flags/Flag-Argentina.webp",flag2: "/flags/2560px-Flag_of_South_Korea_(1945–1948).svg.png", },
  { id: 31, team1: "South-africa", team2: "Cameroon", score1: "0", score2: "1", status: "FT",flag1: "/flags/Flag_of_South_Africa.svg.png",flag2: "/flags/Flag_of_Cameroon.svg.png", },
  { id: 32, team1: "Brazil", team2: "Portugal", score1: "1", score2: "1",pso: "7-8", status: "FT",flag1: "/flags/1200px-Flag_of_Brazil.svg.webp",flag2: "/flags/flag-of-portugal-free-vector.jpg", },
];

// Determine Winners for Quarter Finals (QF) based on R16 results
// Quarter-finals (QF)
export const QF_MATCHES = [
    { id: 33, team1: getWinner(R16_MATCHES[0]), team2: getWinner(R16_MATCHES[1]), score1: "2", score2: "2",pso: "5-3", status: "FT", flag1: "/flags/Flag_of_Belgium_(1830).svg.png",flag2: "/flags/1200px-Flag_of_Germany.svg.png",}, // W49 vs W50
    { id: 34, team1: getWinner(R16_MATCHES[2]), team2: "Italy", score1: "2", score2: "0", status: "FT", flag1: "/flags/eng.jpg",flag2: "/flags/Flag_of_Italy.svg.png", }, // W51 vs W52
    { id: 35, team1: getWinner(R16_MATCHES[4]), team2: getWinner(R16_MATCHES[5]), score1: "2", score2: "1", pso: "", status: "FT", flag1: "/flags/Flag-Spain.jpg",flag2: "/flags/Flag-Argentina.webp", }, // W53 vs W54
    { id: 36, team1: getWinner(R16_MATCHES[6]), team2: "Portugal", score1: "1", score2: "3", status: "FT", flag1: "/flags/Flag_of_Cameroon.svg.png",flag2: "/flags/flag-of-portugal-free-vector.jpg", }, // W55 vs W56
];

// Semi-finals (SF)
export const SF_MATCHES = [
    { id: 37, team1: "Belgium", team2: getWinner(QF_MATCHES[1]), score1: "2", score2: "1", status: "FT", flag1: "/flags/Flag_of_Belgium_(1830).svg.png",flag2: "/flags/eng.jpg", }, // W57 vs W58
    { id: 38, team1: getWinner(QF_MATCHES[2]), team2: getWinner(QF_MATCHES[3]), score1: "5", score2: "1", status: "FT", flag1: "/flags/Flag-Spain.jpg",flag2: "/flags/flag-of-portugal-free-vector.jpg", }, // W59 vs W60
];

// Final (F)
export const FINAL_MATCH = [
    { id: 39, team1: getWinner(SF_MATCHES[0]), team2: getWinner(SF_MATCHES[1]), score1: "1", score2: "2", status: "FT", flag1: "/flags/Flag_of_Belgium_(1830).svg.png",flag2: "/flags/Flag-Spain.jpg", }, // W61 vs W62
];
  
// 3rd Place Playoff (Optional)
export const THIRD_PLACE_MATCH = [
    // Logic to determine 3rd/4th place losers goes here
    // ...
];