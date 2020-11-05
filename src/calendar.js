import React, { useState } from "react";
import { calendarGenerator, dates, months } from "./helper";
import Container from "./components/container";
import CalendarText from "./components/calendarText";
import Days from "./components/days";

const Calendar = () => {
  const [datesArr, changeDatesArr] = useState(dates);
  const [monthText, changeMonthText] = useState(months);
  const [calendar, changeCalendar] = useState(calendarGenerator());

  return (
    <>
      <Container>
        <CalendarText datesArr={datesArr} monthText={monthText} />
        <Days calendar={calendar} />
      </Container>
    </>
  );
};
export default Calendar;
