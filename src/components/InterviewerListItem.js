import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";
// Individual interview item
const InterviewerListItem = (props) => {
  let interviewer = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li
      className={interviewer}
      onClick={() => {
        props.setInterviewer(props.id);
      }}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;
