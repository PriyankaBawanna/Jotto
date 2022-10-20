import { shallow } from "enzyme";
import Congrats from "./congrats";
import { findByTestAttribute } from "../test/testUtils";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
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
