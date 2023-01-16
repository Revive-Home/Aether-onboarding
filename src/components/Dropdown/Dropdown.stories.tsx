import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  list: links,
};
