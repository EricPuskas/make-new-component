// @ts-nocheck
/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import COMPONENT_NAME from "./COMPONENT_NAME";

/**
 * Mocking the useTranslation hook
 * @see https://github.com/i18next/react-i18next/issues/876
 *
 */
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

/**
 * Default test
 */
describe("COMPONENT_NAME", () => {
  it("renders the component", () => {
    // render(<COMPONENT_NAME />);
  });
});
