// knockoutFixtures.js


// Placeholder structure for Round of 16 (R16) matches
export const getWinner = (match: any) => {
  if (match.score1 > match.score2) return match.team1;
  if (match.score2 > match.score1) return match.team2;
  return match.psoWinner ?? "TBD";
};

export const R16_MATCHES = [
  // Assumes Group A Winner (1A), Group B Runner-up (2B), etc.
  { id: 25, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png",},
  { id: 26, team1: "TBD", team2: "TBD", score1: "", score2: "", pso: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 27, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 28, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 29, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 30, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 31, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
  { id: 32, team1: "TBD", team2: "TBD", score1: "", score2: "", status: "FT",flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", },
];

// Determine Winners for Quarter Finals (QF) based on R16 results
// Quarter-finals (QF)
export const QF_MATCHES = [
    { id: 33, team1: getWinner(R16_MATCHES[0]), team2: getWinner(R16_MATCHES[1]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png",}, // W49 vs W50
    { id: 34, team1: getWinner(R16_MATCHES[2]), team2: getWinner(R16_MATCHES[3]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W51 vs W52
    { id: 35, team1: getWinner(R16_MATCHES[4]), team2: getWinner(R16_MATCHES[5]), score1: "", score2: "", pso: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W53 vs W54
    { id: 36, team1: getWinner(R16_MATCHES[6]), team2: getWinner(R16_MATCHES[7]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W55 vs W56
];

// Semi-finals (SF)
export const SF_MATCHES = [
    { id: 37, team1: getWinner(QF_MATCHES[0]), team2: getWinner(QF_MATCHES[1]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W57 vs W58
    { id: 38, team1: getWinner(QF_MATCHES[2]), team2: getWinner(QF_MATCHES[3]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W59 vs W60
];

// Final (F)
export const FINAL_MATCH = [
    { id: 39, team1: getWinner(SF_MATCHES[0]), team2: getWinner(SF_MATCHES[1]), score1: "", score2: "", status: "FT", flag1: "/flags/1200px-Icon_None.svg.png",flag2: "/flags/1200px-Icon_None.svg.png", }, // W61 vs W62
];

// 3rd Place Playoff (Optional)
export const THIRD_PLACE_MATCH = [
    // Logic to determine 3rd/4th place losers goes here
    // ...
];