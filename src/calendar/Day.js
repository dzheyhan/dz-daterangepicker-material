import React from "react";

function Day(props) {
  const cellClassName = (day: Object) => {
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
    if (day.isFocused && !(day.isStart || day.isEnd)) {
      className.push(`${mainClass}--focus`);
    }
    if (day.isCurrentDate) {
      className.push(`${mainClass}--today`);
    }
    if (day.maybeEnd) {
      className.push(`${mainClass}--maybe-end`);
    }

    return className.join(" ");
  };

  const tabIndex = (day: Object) => {
    return day.isCurrentDate ? 1 : 0;
  };

  const getDayProps = (day: Object, index: Number) => {
    var defaultProps = {
      key: index,
      onKeyDown: e => props.handleKeyDown(e, day.date),
      tabIndex: tabIndex(day)
    };

    if (day.isInMonth && !day.isDisabled) {
      defaultProps = {
        onMouseUp: e => props.onClickDay(e, day.date),
        onMouseOver: e => props.onDateMouseOver(e, day.date),
        ...defaultProps
      };
    }

    return defaultProps;
  };

  return (
    <tbody className="dz-calendar__table__body">
      {props.weeks.map((week, index) => (
        <tr key={index} className="dz-calendar-table-body-week">
          {week.map((day, index) => (
            <td
              key={index}
              className={cellClassName(day)}
              {...getDayProps(day, index)}
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
