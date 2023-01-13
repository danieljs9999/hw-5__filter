import React from "react";
import "./Buttons.css";

function Button(props) {
  const { title, onClick, style } = props;
  return (
    <div>
      <button className={style} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
export default Button;
