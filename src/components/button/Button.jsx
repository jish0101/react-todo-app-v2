import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button className="btn" data-type={props.dataType} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
