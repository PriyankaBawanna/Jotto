//receive the success state as a prop
//if success state is true than print the congrats message
import React from "react";

export default function Congrats(props) {
  if (props.success) {
    return (
      <>
        <div data-test="componentCongrats">
          <span data-test="congratsMessage">
            Congratulations ! you guessed the word !
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div data-test="componentCongrats" />;
      </>
    );
  }
}
