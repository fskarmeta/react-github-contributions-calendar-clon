import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";

const Calendar = () => {
  const [datesArr, changeDatesArr] = useState(["Mon", "Wed", "Fri"]);
  const [monthText, changeMonthText] = useState([
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
  ]);
  // const [calendar, changeCalendar] = useState(null);

  let days = [];
  for (let i = 1; i <= 366; i++) {
    let d = new Date(2020, 0, i);
    days.push({
      date: d,
      title: d.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
      activity: "test",
      contributions: 0, //Math.floor((Math.random() * 100)),
    });
  }

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

  const bgColor = (string) => {
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
  };

  return (
    <div className="overcontainer">
      <div className="monthstext">
        {monthText.map((e, i) => (
          <div className="monthtext" key={i}>
            {e}
          </div>
        ))}
      </div>
      <div className="days">
        {datesArr.map((e, i) => (
          <div className="daystext" key={i}>
            {e}
          </div>
        ))}
      </div>
      <div className="container">
        {days.map((e, i) => (
          <Tippy
            theme="translucent"
            content={e.contributions + " contributions on " + e.title}
            key={i}
          >
            <div key={i} className="day" style={bgColor(e.activity)}></div>
          </Tippy>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
