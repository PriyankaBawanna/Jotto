import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkPropType } from "../test/testUtils";
import InputComponent from "./inputComponent";

const setup = () => {
  return shallow(<InputComponent />);
};

test("input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttribute(wrapper, "componentInput");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkPropType(InputComponent, { secretWord: "party" });
});

describe("state controlled input filed", () => {
  test("state updates with value of input box upon change  ", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputBox");
    const mockEvent = { target: { value: "Apple" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("Apple");
  });
});
