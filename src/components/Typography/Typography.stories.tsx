import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Foundations/Typography",
  component: Typography,
  argTypes: {
    className: {
      control: false,
    },
    variant: {
      options: [
        "heading1",
        "heading2",
        "heading3",
        "heading4",
        "heading5",
        "heading6",
        "subtitle",
        "body",
        "body2",
        "link",
        "small",
      ],
      control: { type: "select" },
    },
    weight: {
      options: ["medium", "semibold", "bold", "default"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  variant: "body",
  children: "Typography playground",
};

export const Regular = () => (
  <div className="flex flex-col gap-y-4">
    <Typography variant="heading1">Heading 1</Typography>
    <Typography variant="heading2">Heading 2</Typography>
    <Typography variant="heading3">Heading 3</Typography>
    <Typography variant="heading4">Heading 4</Typography>
    <Typography variant="heading5">Heading 5</Typography>
    <Typography variant="heading6">Heading 6</Typography>
    <Typography variant="subtitle">Subtitle</Typography>
    <Typography variant="body">Body Text</Typography>
    <Typography variant="body2">Body Text 2</Typography>
    <Typography variant="link">Link</Typography>
    <Typography variant="small">Small</Typography>
  </div>
);

export const Medium = () => (
  <div className="flex flex-col gap-y-4 [&>*]:!font-medium">
    <Typography variant="heading1">Heading 1</Typography>
    <Typography variant="heading2">Heading 2</Typography>
    <Typography variant="heading3">Heading 3</Typography>
    <Typography variant="heading4">Heading 4</Typography>
    <Typography variant="heading5">Heading 5</Typography>
    <Typography variant="heading6">Heading 6</Typography>
    <Typography variant="subtitle">Subtitle</Typography>
    <Typography variant="body">Body Text</Typography>
    <Typography variant="body2">Body Text 2</Typography>
    <Typography variant="link">Link</Typography>
    <Typography variant="small">Small</Typography>
  </div>
);

export const Semibold = () => (
  <div className="flex flex-col gap-y-4 [&>*]:!font-semibold">
    <Typography variant="heading1">Heading 1</Typography>
    <Typography variant="heading2">Heading 2</Typography>
    <Typography variant="heading3">Heading 3</Typography>
    <Typography variant="heading4">Heading 4</Typography>
    <Typography variant="heading5">Heading 5</Typography>
    <Typography variant="heading6">Heading 6</Typography>
    <Typography variant="subtitle">Subtitle</Typography>
    <Typography variant="body">Body Text</Typography>
    <Typography variant="body2">Body Text 2</Typography>
    <Typography variant="link">Link</Typography>
    <Typography variant="small">Small</Typography>
  </div>
);

export const Bold = () => (
  <div className="flex flex-col gap-y-4 [&>*]:!font-bold">
    <Typography variant="heading1">Heading 1</Typography>
    <Typography variant="heading2">Heading 2</Typography>
    <Typography variant="heading3">Heading 3</Typography>
    <Typography variant="heading4">Heading 4</Typography>
    <Typography variant="heading5">Heading 5</Typography>
    <Typography variant="heading6">Heading 6</Typography>
    <Typography variant="subtitle">Subtitle</Typography>
    <Typography variant="body">Body Text</Typography>
    <Typography variant="body2">Body Text 2</Typography>
    <Typography variant="link">Link</Typography>
    <Typography variant="small">Small</Typography>
  </div>
);
