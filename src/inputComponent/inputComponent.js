import React from "react";

export default function InputComponent({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
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
        <button data-test="submit-button">Submit</button>
      </form>
    </div>
  );
}
