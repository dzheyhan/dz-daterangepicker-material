import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateRangeIcon from "@material-ui/icons/DateRange";
import IconButton from "@material-ui/core/IconButton";

function DzTextField(props) {
  const { start, end, format } = props;

  const getFormattedRangeDate = () => {
    const formattedStart = start ? start.format(format || props) : "";
    const formattedEnd = end ? end.format(format) : "";

    if (formattedStart || formattedEnd) {
      return `${formattedStart} - ${formattedEnd}`;
    }
    return "";
  };

  return (
    <div>
      <TextField
        cid="outlined-basic"
        label="Date Range"
        placeholder={`${format} - ${format}`}
        onClick={props.handleClick}
        value={getFormattedRangeDate()}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="Date range">
                <DateRangeIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {props.children}
    </div>
  );
}

export default DzTextField;
