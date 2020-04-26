import React from "react";
import PropTypes from "prop-types";

function TableHeader(props) {
  return (
    <thead className="dz-calendar__table__header">
      <tr>
        {props.weekDays.map(day => (
          <th key={day}>{day.charAt(0)}</th>
        ))}
      </tr>
      <tr>
        <th
          aria-hidden="true"
          className="dz-calendar__table__header__divider"
          colSpan="7"
        />
      </tr>
    </thead>
  );
}

// Specifies the default values for props:
TableHeader.defaultProps = {
  weekDays: []
};

TableHeader.propTypes = {
  weekDays: PropTypes.arrayOf(PropTypes.string)
};

export default TableHeader;
