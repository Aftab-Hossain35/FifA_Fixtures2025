import React from "react";
import Image from "next/image";

// fixtures.js

export const ALL_GROUPS_FIXTURES = [
  {
    groupName: "Group A",
    matches: [
      {
        team1: "France",
        team2: "Belgium",
        flag1: "/flags/R.jpg", // Ensure these paths are correct
        flag2: "/flags/Flag_of_Belgium_(1830).svg.png",
        // No scores as these are likely upcoming fixtures
        date: "Dec 1, 23",
        time: "14:00 GMT",
        score1: "1",
        score2: "3",
      },
      {
        team1: "Mexico",
        team2: "Belgium",
        flag1: "/flags/mexico.png",
        flag2: "/flags/Flag_of_Belgium_(1830).svg.png",
        date: "Dec 1, 23",
        time: "17:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "France",
        team2: "Mexico",
        flag1: "/flags/R.jpg",
        flag2: "/flags/mexico.png",
        date: "Dec 5, 23",
        time: "19:00 GMT",
        score1: "",
        score2: "",
      },
    ],
  },
  {
    groupName: "Group B",
    matches: [
      {
        team1: "Spain",
        team2: "Netherland",
        flag1: "/flags/Flag-Spain.jpg",
        flag2: "/flags/netherland.png",
        date: "Dec 2, 23",
        time: "14:00 GMT",
        score1: "3",
        score2: "0",
      },
      {
        team1: "Uruguay",
        team2: "Netherland",
        flag1: "/flags/Flag_of_Uruguay.svg",
        flag2: "/flags/netherland.png",
        date: "Dec 6, 23",
        time: "17:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Spain",
        team2: "Uruguay",
        flag1: "/flags/Flag-Spain.jpg",
        flag2: "/flags/Flag_of_Uruguay.svg",
        date: "Dec 6, 23",
        time: "19:00 GMT",
        score1: "",
        score2: "",
      },
    ],
  },
  // Add Group C, D, etc. similarly
  {
    groupName: "Group C",
    matches: [
      {
        team1: "Argentina",
        team2: "Germany",
        flag1: "/flags/Flag-Argentina.webp",
        flag2: "/flags/1200px-Flag_of_Germany.svg.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "2",
        score2: "3",
      },
      {
        team1: "Usa",
        team2: "Germany",
        flag1: "/flags/Flag-United-States-of-America.webp",
        flag2: "/flags/1200px-Flag_of_Germany.svg.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Argentina",
        team2: "Usa",
        flag1: "/flags/Flag-Argentina.webp",
        flag2: "/flags/Flag-United-States-of-America.webp",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
   {
    groupName: "Group D",
    matches: [
      {
        team1: "England",
        team2: "Colombia",
        flag1: "/flags/eng.jpg",
        flag2: "/flags/colombia.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Iran",
        team2: "Colombia",
        flag1: "/flags/iran.png",
        flag2: "/flags/colombia.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "England",
        team2: "Iran",
        flag1: "/flags/eng.jpg",
        flag2: "/flags/iran.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
   {
    groupName: "Group E",
    matches: [
      {
        team1: "South-Korea",
        team2: "Australia",
        flag1: "/flags/2560px-Flag_of_South_Korea_(1945–1948).svg.png",
        flag2: "/flags/Flag_of_Australia_(converted).svg",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Newzealand",
        team2: "Australia",
        flag1: "/flags/new_zealand.png",
        flag2: "/flags/Flag_of_Australia_(converted).svg",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "South-Korea",
        team2: "Newzealand",
        flag1: "/flags/2560px-Flag_of_South_Korea_(1945–1948).svg.png",
        flag2: "/flags/new_zealand.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
   {
    groupName: "Group F",
    matches: [
      {
        team1: "Denmark",
        team2: "Canada",
        flag1: "/flags/denmark-paper-flag-patriotic-background-national-138241023.jpg",
        flag2: "/flags/canada.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Turkey",
        team2: "Canada",
        flag1: "/flags/Turkey.png",
        flag2: "/flags/canada.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Denmark",
        team2: "Turkey",
        flag1: "/flags/denmark-paper-flag-patriotic-background-national-138241023.jpg",
        flag2: "/flags/Turkey.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
   {
    groupName: "Group G",
    matches: [
      {
        team1: "Brazil",
        team2: "Italy",
        flag1: "/flags/1200px-Flag_of_Brazil.svg.webp",
        flag2: "/flags/Flag_of_Italy.svg.png",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Italy",
        team2: "Switzerland",
        flag1: "/flags/Flag_of_Italy.svg.png",
        flag2: "/flags/illustration-of-switzerland-flag-vector.webp",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Brazil",
        team2: "Switzerland",
        flag1: "/flags/1200px-Flag_of_Brazil.svg.webp",
        flag2: "/flags/illustration-of-switzerland-flag-vector.webp",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
   {
    groupName: "Group H",
    matches: [
      {
        team1: "Portugal",
        team2: "Japan",
        flag1: "/flags/flag-of-portugal-free-vector.jpg",
        flag2: "/flags/japan.webp",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Japan",
        team2: "Croatia",
        flag1: "/flags/japan.webp",
        flag2: "/flags/Flag-Croatia.jpg",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      {
        team1: "Portugal",
        team2: "Croatia",
        flag1: "/flags/flag-of-portugal-free-vector.jpg",
        flag2: "/flags/Flag-Croatia.jpg",
        date: "Dec 3, 23",
        time: "14:00 GMT",
        score1: "",
        score2: "",
      },
      // ... more matches
    ],
  },
];

// Round of 16
// knockoutFixtures.js
