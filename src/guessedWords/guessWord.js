import propTypes from "prop-types";

import React from "react";

export default function GuessWord(prop) {
  let contents;
  if (prop.guessedWord.length === 0) {
    contents = (
      <span data-test="guessInstruction">Try to guess the secret word</span>
    );
  }
  return <div data-test="componentGuessedWord">{contents}</div>;
}
GuessWord.propTypes = {
  guessedWord: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string,
      letterMatchCount: propTypes.number,
    })
  ),
};
