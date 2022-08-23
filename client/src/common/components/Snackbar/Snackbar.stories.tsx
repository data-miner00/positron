import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SnackbarProps } from "../models";
import Snackbar from "./Snackbar";

export default {
  title: "Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const defaultMessage =
  "This is a very long message to be displayed on snackbar";

const Template = (args: SnackbarProps) => <Snackbar {...args} />;

export const Default: ComponentStory<typeof Snackbar> = Template.bind({});
Default.args = {
  message: defaultMessage,
  type: "info",
};

export const Success: ComponentStory<typeof Snackbar> = Template.bind({});
Success.args = {
  message: defaultMessage,
  type: "success",
};

export const Warning: ComponentStory<typeof Snackbar> = Template.bind({});
Warning.args = {
  message: defaultMessage,
  type: "warning",
};

export const Error: ComponentStory<typeof Snackbar> = Template.bind({});
Error.args = {
  message: defaultMessage,
  type: "error",
};
