import React from "react";
import Popover from "@material-ui/core/Popover";

function DzPopover(props) {
  const open = Boolean(props.anchorEl);

  return (
    <Popover
      id="dz-daterangepicker-popover"
      open={open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
      {props.children}
    </Popover>
  );
}

export default DzPopover;
