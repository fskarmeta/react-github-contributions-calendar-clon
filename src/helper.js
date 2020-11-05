// Calendar Days generator

export function calendarGenerator() {
  let days = [];
  for (let i = 1; i <= 366; i++) {
    let d = new Date(2020, 0, i);
    days.push({
      date: d,
      title: d.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
      activity: "test",
      contributions: Math.floor(Math.random() * 100),
    });
  }
  // Level per contributions

  for (let contri of days) {
    if (contri.contributions === 0) {
      contri.activity = "level_0";
    }
    if (contri.contributions > 0 && contri.contributions <= 5) {
      contri.activity = "level_1";
    }
    if (contri.contributions > 5 && contri.contributions <= 10) {
      contri.activity = "level_2";
    }
    if (contri.contributions > 10 && contri.contributions <= 20) {
      contri.activity = "level_3";
    }
    if (contri.contributions > 20 && contri.contributions <= 40) {
      contri.activity = "level_4";
    }
    if (contri.contributions > 40 && contri.contributions <= 70) {
      contri.activity = "level_5";
    }
    if (contri.contributions > 70) {
      contri.activity = "level_6";
    }
  }

  return days;
}

// Color per level

export function bgColor(string) {
  switch (string) {
    case "level_0":
      return { backgroundColor: "rgb(218, 232, 214)" };
    case "level_1":
      return { backgroundColor: "#a4fba6" };
    case "level_2":
      return { backgroundColor: "#4ae54a" };
    case "level_3":
      return { backgroundColor: "#30cb00" };
    case "level_4":
      return { backgroundColor: "#0f9200" };
    case "level_5":
      return { backgroundColor: "#006203" };
    case "level_6":
      return { backgroundColor: "#041501" };
    default:
      return { backgroundColor: "white" };
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
