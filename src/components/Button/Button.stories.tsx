import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const leftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Test Button",
  leftIcon: leftArrow,
  rightIcon: rightArrow,
  onClick: () => {},
  type: "button",
  "aria-label": "test label",
};

export const Small = Template.bind({});
Small.args = {
  variant: "secondary",
  children: "Small Button",
  leftIcon: leftArrow,
  rightIcon: rightArrow,
  onClick: () => {},
  type: "button",
  size: "sm",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  variant: "gray",
  children: "No Icon Button",
  onClick: () => {},
  type: "button",
  size: "lg",
};

export const Link = Template.bind({});
Link.args = {
  variant: "turquoise",
  children: "External link",
  onClick: () => {},
  type: "button",
  size: "sm",
  href: "http://google.com",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: "primary",
  children: "Full Width Button",
  onClick: () => {},
  type: "button",
  size: "sm",
  fullWidth: true,
};
