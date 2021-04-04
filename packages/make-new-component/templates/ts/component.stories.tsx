// @ts-nocheck
/**
 * Storybook
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
 * @param args COMPONENT_NAMEProps
 * @returns
 */
const Template: Story<COMPONENT_NAMEProps> = (args) => (
  <COMPONENT_NAME {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {};

/**
 * Secondary case
 */
export const Secondary = Template.bind({});
Secondary.args = {};
