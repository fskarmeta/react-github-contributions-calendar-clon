import { bgColor } from "../helper";
import Tippy from "@tippyjs/react";

const Days = ({ calendar }) => {
  return (
    <div className="dayscontainer">
      {calendar.map((e, i) => (
        <Tippy
          theme="translucent"
          content={e.contributions + " contributions on " + e.title}
          key={i}
        >
          <div key={i} className="day" style={bgColor(e.activity)}></div>
        </Tippy>
      ))}
    </div>
  );
};

export default Days;
