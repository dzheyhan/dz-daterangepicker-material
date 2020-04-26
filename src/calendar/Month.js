import React from "react";

function Month(props) {
  const cellClassName = (month: Object) => {
    const mainClass = "dz-calendar__table__body__cell";
    const className = [mainClass];

    if (month.isHovered) {
      className.push(`${mainClass}--hover`);
    }

    if (month.isCurrentMonth) {
      className.push(`${mainClass}--today`);
    }

    if (month.selected) {
      className.push(`${mainClass}--active`);
    }

    return className.join(" ");
  };

  const tabIndex = (month: Object) => {
    return month.isCurrentMonth ? 1 : 0;
  };

  return (
    <tbody className="dz-calendar__table__body">
      {props.rows.map((month, index) => (
        <tr key={index} className="dz-calendar-table-body-month">
          {month.map((month, index) => (
            <td
              className={cellClassName(month)}
              onMouseUp={e => props.onClickMonth(e, month.monthNum)}
              key={index}
              tabIndex={tabIndex(month)}
            >
              <div className="dz-calendar__table__body__cell__content month-content">
                {month.monthName}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default Month;
