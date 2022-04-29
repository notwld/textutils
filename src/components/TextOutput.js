import React from "react";
import "../App.css";

export default function TextOutput(props) {
  return (
    <div className="Output">
      <p>
        {props.text.split(" ").length} Words {props.text.length} Characters
        <br />
        {0.008 * props.text.split(" ").length} min read
      </p>
      <br />
      <h1>Preview</h1>
      <p>{props.text.length > 0 ? props.text : "Enter some text to preview"}</p>
    </div>
  );
}
