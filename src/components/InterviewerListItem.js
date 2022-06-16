import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

const InterviewerListItem = (props) => {
  let interviewer = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });

  return (
    <li
      className={interviewer}
      onClick={() => { 
        props.setInterviewer(props.id) 
        console.log("props.id", props.id);
      }}>

      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}

export default InterviewerListItem;