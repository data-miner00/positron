import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonProps } from "../models";
import Button from "./Button";

type ButtonComponentStory = ComponentStory<typeof Button>;

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const label = "Click me";

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default: ButtonComponentStory = Template.bind({});
Default.args = {
  label,
};

export const Primary: ButtonComponentStory = Template.bind({});
Primary.args = {
  primary: true,
  label,
};

export const Large: ButtonComponentStory = Template.bind({});
Large.args = {
  size: "large",
  label,
};

export const Small: ButtonComponentStory = Template.bind({});
Small.args = {
  size: "small",
  label,
};
