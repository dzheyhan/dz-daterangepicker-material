import React from "react";

function Content(props) {
  return (
    <div className="dz-calendar-content" {...props}>
      <table className="dz-calendar__table">{props.children}</table>
    </div>
  );
}
export default Content;
