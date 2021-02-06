import React from "react";
import {Moment} from "moment";
import {Day} from "../typings"

interface DayProps {
    onDateMouseOver: any,
    onClickDay: any,
    weeks: Day[][]
    start?: Moment
    end?: Moment
}

const Day = (props: DayProps) =>{
  const cellClassName = (day: Day) => {
    const mainClass = "dz-calendar__table__body__cell";
    const className = [mainClass];

    if (day.isInRange && !(day.isStart || day.isEnd)) {
      className.push(`${mainClass}--semi-selected`);
    }

    if (day.isStart) {
      className.push(`${mainClass}--begin-range`);
    }
    if (day.isEnd || day.maybeEnd) {
      className.push(`${mainClass}--end-range`);
    }

    if (!day.isInMonth || day.isDisabled) {
      className.push(`${mainClass}--disabled`);
      return className.join(" ");
    }

    if (day.isHovered) {
      className.push(`${mainClass}--hover`);
    }
    if (day.isCurrentDate) {
      className.push(`${mainClass}--today`);
    }
    if (day.maybeEnd) {
      className.push(`${mainClass}--maybe-end`);
    }

    return className.join(" ");
  };

  const tabIndex = (day: Day) => {
    return day.isCurrentDate ? 1 : 0;
  };

  const getDayProps = (day: Day) => {
    if (day.isInMonth && !day.isDisabled) {
      return  {
        onMouseUp: () => props.onClickDay(day.date),
        onMouseOver: () => props.onDateMouseOver(day.date),
      };
    }
    return {};
  };

  return (
    <tbody className="dz-calendar__table__body">
      {props.weeks.map((week, index:number) => (
        <tr key={index} className="dz-calendar-table-body-week">
          {week.map((day: Day, index:number) => (
            <td
              key={index}
              className={cellClassName(day)}
              tabIndex={tabIndex(day)}
              {...getDayProps(day)}
            >
              <div className="dz-calendar__table__body__cell__content">
                {day.date.date()}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default Day;
