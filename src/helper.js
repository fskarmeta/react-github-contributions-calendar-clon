// Calendar Days generator

export function calendarGenerator() {
  let days = [];
  for (let i = 1; i <= 366; i++) {
    let d = new Date(2020, 0, i);
    days.push({
      date: d,
      title: d.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
      activity: "test",
      contributions: 0, //Math.floor(Math.random() * 100),
    });
  }
  return days;
}

// Color per level

let redPallet = [
  "rgb(253,245,245)",
  "rgb(247,212,211)",
  "rgb(244,195,195)",
  "rgb(241,179,178)",
  "rgb(236,146,144)",
  "rgb(230,113,111)",
  "rgb(224,80,78)",
  "rgb(218,46,44)",
];

// let blackPallet = [
//   "rgb(0,0,0)",
//   "rgb(194,194,194)",
//   "rgb(163,163,163)",
//   "rgb(122,122,122)",
//   "rgb(82,82,82)",
//   "rgb(51,51,51)",
//   "rgb(31,31,31)",
//   "rgb(0,0,0)",
// ];

// let greenPallet = [
//   "rgb(218, 232, 214)",
//   "#a4fba6",
//   "#4ae54a",
//   "#30cb00",
//   "#0f9200",
//   "#006203",
//   "#041501",
// ];

export function bgColor(string) {
  switch (string) {
    case "level_0":
      return { backgroundColor: redPallet[0] };
    case "level_1":
      return { backgroundColor: redPallet[1] };
    case "level_2":
      return { backgroundColor: redPallet[2] };
    case "level_3":
      return { backgroundColor: redPallet[3] };
    case "level_4":
      return { backgroundColor: redPallet[5] };
    case "level_5":
      return { backgroundColor: redPallet[6] };
    case "level_6":
      return { backgroundColor: redPallet[7] };
    default:
      return { backgroundColor: "rgb(253,245,245)" };
  }
}

// Dates Text array

export const dates = ["Mon", "Wed", "Fri"];

// Months Text array

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
