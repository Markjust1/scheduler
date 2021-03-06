import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
// Day component
export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
// Message to display if the spot is full or available
  const formatSpots = () => {
    let spotsText = "";
    if (props.spots === 1) {
      spotsText = "1 spot remaining";
    }
    if (props.spots === 0) {
      spotsText = "no spots remaining";
    }
    if (props.spots > 1) {
      spotsText = props.spots + " spots remaining";
    }
    return spotsText;
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
