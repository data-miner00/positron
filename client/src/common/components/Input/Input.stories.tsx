import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputProps } from "../models";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    handleChange: {
      action: "handleChange",
    },
  },
} as ComponentMeta<typeof Input>;

const Template = (args: InputProps) => <Input {...args} />;

export const Default: ComponentStory<typeof Input> = Template.bind({});
Default.args = {
  placeholder: "Please enter your email",
  name: "Email",
  type: "email",
  value: "",
};
