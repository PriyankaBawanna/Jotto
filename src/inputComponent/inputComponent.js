import React, { useState } from "react";

export default function InputComponent({ secretWord }) {
  const [currentGuess, setCurrentGuess] = useState("");
  return (
    <div data-test="componentInput">
      <form className="formInline">
        <input
          data-test="inputBox"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submitButton"
          onClick={(evt) => {
            evt.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
