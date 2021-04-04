// @ts-nocheck
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import COMPONENT_NAME from "./COMPONENT_NAME";

/**
 * Default test
 */
it("has a COMPONENT_NAME component", () => {
  const { getByText } = render(<COMPONENT_NAME />);
  expect(getByText("COMPONENT_NAME")).toBeInTheDocument();
});
