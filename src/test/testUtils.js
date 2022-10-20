import checkPropTypes from "check-prop-types";
import { Component } from "react";
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkPropType = (Component, conformingProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    conformingProps,
    "prop",
    Component.name
  );
  expect(propError).toBeUndefined();
};
