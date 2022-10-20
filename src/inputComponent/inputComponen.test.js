import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkPropType } from "../test/testUtils";
import InputComponent from "./inputComponent";

const setup = () => {
  return shallow(<InputComponent />);
};

//this code for useState destructure
const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // overwrite the useState Property , overwrite it with a function that takes an initial state
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

test("input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttribute(wrapper, "componentInput");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkPropType(InputComponent, { secretWord: "party" });
});

describe("state controlled input filed", () => {
  //way to use repeated code
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
    mockSetCurrentGuess.mockClear(); //for not take old test result
  });

  test("state updates with value of input box upon change  ", () => {
    const inputBox = findByTestAttribute(wrapper, "inputBox");
    const mockEvent = { target: { value: "Apple" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("Apple");
  });
  test("field is cleared upon submits button click", () => {
    const submitButton = findByTestAttribute(wrapper, "submitButton");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
