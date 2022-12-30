import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
