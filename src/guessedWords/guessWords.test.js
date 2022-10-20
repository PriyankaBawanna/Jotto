import React from "react";
import { shallow } from "enzyme";
import { checkPropType, findByTestAttribute } from "../test/testUtils";
import GuessWord from "./guessWord";

const defaultProps = {
  guessWords: [{ guessWords: "train ", letterMatchCount: 3 }],
};

const setup = (prop = {}) => {
  const setUpProps = { ...defaultProps, ...prop };
  return shallow(<GuessWord {...setUpProps} />);
};

test("does not throw waring with expected props  ", () => {
  checkPropType(GuessWord, defaultProps);
});

describe("if there no word guessed", () => {
  test("renders without error ", () => {
    const wrapper = setup({ guessWords: [] });
    const component = findByTestAttribute(wrapper, "componentGuessedWord");
    expect(component.length).toBe(1);
  });
  test("render instruction to guess a word ", () => {});
});
describe("if there are word guessed", () => {});
