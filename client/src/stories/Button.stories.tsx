import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";

type ButtonComponentStory = ComponentStory<typeof Button>;

export default {
  title: "Button",
  component: Button,
  // argTypes: { handleClick: { action: "handlClick" } },
} as ComponentMeta<typeof Button>;

const label = "Click me";

const Template = (args: any) => <Button {...args} />;

export const Primary: ButtonComponentStory = Template.bind({});
Primary.args = {
  primary: true,
  label,
};

export const Secondary: ButtonComponentStory = Template.bind({});
Secondary.args = {
  label,
};
