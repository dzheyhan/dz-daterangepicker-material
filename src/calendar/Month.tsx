import React from "react";
import {Month} from "../typings"

interface MonthProps {
    onClickMonth: any
    rows: Month[][]
}

function Month(props: MonthProps) {
  const cellClassName = (month: Month) => {
    const mainClass = "dz-calendar__table__body__cell";
    const className = [mainClass];

    if (month.isCurrentMonth) {
      className.push(`${mainClass}--today`);
    }

    if (month.selected) {
      className.push(`${mainClass}--active`);
    }

    return className.join(" ");
  };

  const tabIndex = (month: Month) => {
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
