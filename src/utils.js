import moment, { Moment } from "moment";

/**
 * @param {number} year The start year
 * @param {number} month The end month
 */
function getMonthDateRange(year, month) {
  // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc
  const startDate = moment([year, month]);

  // Clone the value before .endOf()
  const endDate = moment(startDate).endOf("month");

  // make sure to call toDate() for plain JavaScript date type
  return { start: startDate, end: endDate };
}

/**
 * @param {date|Moment} start The start date
 * @param {date|Moment} end The end date
 * @param {"monday"|"saturday"|"sunday"} weekStart First Day of the Week
 */
function getCalendarDateRange(start: Moment, end: Moment, weekStart) {
  const weekStartNum = start.day() || 7;
  const weekEndNum = end.day() || 7;

  let subtractDays = weekStartNum;

  if (weekStart === "monday") {
    subtractDays = weekStartNum - 1;
  } else if (weekStart === "saturday") {
    subtractDays = weekStartNum + 1;
  }

  const startCalendar = start.subtract(subtractDays, "d");
  const endCalendar = end.add(7 - weekEndNum, "d");

  return {
    startCalendar: startCalendar,
    endCalendar: endCalendar
  };
}

/**
 * @param {date|Moment} start The start date
 * @param {date|Moment} end The end date
 * @param { "year" | "years" | "y" | "month" | "months" | "M" |/
 * "week" | "weeks" | "w" | "day" | "days" } type The range type. eg: 'days', 'hours' etc
 */
function getRange(start, end, type) {
  const diff = end.diff(start, type, true);

  const range = [];
  for (let i = 0; i < diff; i++) {
    range.push(moment(start).add(i, type));
  }
  return range;
}

/**
 * Array split into groups of specific length
 * @param {[moment]} list The list of date
 * @param {number} howMany The end date
 */
function arrayTo2DArray2(list, howMany) {
  let idx = 0;
  const result = [];

  while (idx < list.length) {
    if (idx % howMany === 0) result.push([]);
    result[result.length - 1].push(list[idx++]);
  }

  return result;
}

/**
 * @param {number} year The year
 * @param {number} month The month
 */
function getMonthWeeks(year, month, weekStart) {
  const { start, end } = getMonthDateRange(year, month);

  const { startCalendar, endCalendar } = getCalendarDateRange(
    start,
    end,
    weekStart
  );

  return getRange(startCalendar, endCalendar, "day");
}

function weekdaysMin(weekStart) {
  const weekDays = moment.weekdaysMin(false);

  if (weekStart === "monday") {
    weekDays.push(weekDays.shift());
  } else if (weekStart === "saturday") {
    weekDays.unshift(weekDays.pop());
  }

  return weekDays;
}

export {
  getMonthDateRange,
  getCalendarDateRange,
  getRange,
  arrayTo2DArray2,
  getMonthWeeks,
  weekdaysMin
};
