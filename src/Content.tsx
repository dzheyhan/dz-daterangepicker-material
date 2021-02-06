import React from "react";

interface ContentProps {
    children: React.ReactNode;
}

function Content(props:ContentProps) {
  return (
    <div className="dz-calendar-content">
      <table className="dz-calendar__table">{props.children}</table>
    </div>
  );
}

export default Content;
