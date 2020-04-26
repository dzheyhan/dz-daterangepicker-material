import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Header(props) {
  const btnIcon = () =>
    props.open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;

  return (
    <div className="dz-calendar-header">
      <div className="header__content">
        <Button onClick={props.changeView} endIcon={btnIcon()}>
          {props.btnText}
        </Button>
        <div className="header__content__spacer" />
        <IconButton
          className="header__content__previous-button"
          size="small"
          onClick={props.goToPrevious}
        >
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          className="header__content__next-button"
          size="small"
          onClick={props.goToNext}
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}

// Specifies the default values for props:
Header.defaultProps = {
  open: false
};

Header.propTypes = {
  goToPrevious: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  open: PropTypes.bool
};

export default Header;
