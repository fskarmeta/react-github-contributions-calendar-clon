import React, { useState } from "react";
import { calendarGenerator, dates, months } from "./helper";
import CalendarContainer from "./components/container";
import CalendarText from "./components/calendarText";
import Days from "./components/days";
import Form from "./components/form";
import Row from "./components/row";
import Wall from "./components/wall";

const Calendar = () => {
  const [datesArr, changeDatesArr] = useState(dates);
  const [monthText, changeMonthText] = useState(months);
  const [calendar, changeCalendar] = useState(calendarGenerator());
  const [submit, setSubmit] = useState([{ name: "", day: "", text: "" }]);
  const [wall, setWall] = useState([]);
  const [wallDate, setWallDate] = useState("");

  function getName(e) {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
    if (e.target.name === "day") {
      setWallDate(e.target.value);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    for (let i in calendar) {
      if (calendar[i].title === wallDate) {
        changeCalendar([...calendar, calendar[i].contributions++]);
      }
    }
    setWall([...wall, { ...submit }]);
    createLevel();
  }

  function createLevel() {
    for (let i in calendar) {
      if (calendar[i].contributions === 0) {
        changeCalendar([...calendar, (calendar[i].activity = "level_0")]);
      }
      if (calendar[i].contributions > 0 && calendar[i].contributions <= 5) {
        changeCalendar([...calendar, (calendar[i].activity = "level_1")]);
      }
      if (calendar[i].contributions > 5 && calendar[i].contributions <= 10) {
        changeCalendar([...calendar, (calendar[i].activity = "level_2")]);
      }
      if (calendar[i].contributions > 10 && calendar[i].contributions <= 20) {
        changeCalendar([...calendar, (calendar[i].activity = "level_3")]);
      }
      if (calendar[i].contributions > 20 && calendar[i].contributions <= 40) {
        changeCalendar([...calendar, (calendar[i].activity = "level_4")]);
      }
      if (calendar[i].contributions > 40 && calendar[i].contributions <= 70) {
        changeCalendar([...calendar, (calendar[i].activity = "level_5")]);
      }
      if (calendar[i].contributions > 70) {
        changeCalendar([...calendar, (calendar[i].activity = "level_6")]);
      }
    }
  }

  return (
    <div className="container">
      <CalendarContainer>
        <CalendarText datesArr={datesArr} monthText={monthText} />
        <Days calendar={calendar} />
      </CalendarContainer>
      <Row>
        <Form calendar={calendar} getName={getName} submitForm={submitForm} />
        <Wall wall={wall} />
      </Row>
    </div>
  );
};
export default Calendar;
