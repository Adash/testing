import React from "react";

const SimpleButton = props => {
  return (
    <button type="submit" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default SimpleButton;
