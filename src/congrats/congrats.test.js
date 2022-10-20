import { shallow } from "enzyme";
import Congrats from "./congrats";
import { findByTestAttribute, checkPropType } from "../test/testUtils";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without any error ", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "componentCongrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false ", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, "componentCongrats");
  expect(component.text()).toBe("");
});
test("not empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, "congratsMessage");
  expect(message.text().length).not.toBe(0);
});
test("does not throw waring with expected props", () => {
  //   const expectedProps = { success: "no success" }; instead  of boolean if we pass String than it gives Error
  // Received: "Failed prop type: Invalid prop `success` of type `string` supplied to `Congrats`, expected `boolean`."

  const expectedProps = { success: false };
  checkPropType(Congrats, expectedProps);
});
