import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps } from "../models";
import Button from "./Button";

type ButtonComponentStory = ComponentStory<typeof Button>;

export default {
  title: "Button",
  component: Button,
  // argTypes: { handleClick: { action: "handlClick" } },
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
