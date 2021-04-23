// @ts-nocheck
/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import COMPONENT_NAME, { COMPONENT_NAMEProps } from "./COMPONENT_NAME";

export default {
  title: "Components/COMPONENT_NAME",
  component: COMPONENT_NAME,
} as Meta;

/**
 * Defines the Template
 * @param props COMPONENT_NAMEProps
 * @returns
 */
const Template: Story<COMPONENT_NAMEProps> = (props) => (
  <COMPONENT_NAME {...props} />
);

/**
 * Default case
 */
export const Default = Template.bind({});
Default.props = {};
