import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";

type ButtonComponentStory = ComponentStory<typeof Button>;

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const label = "Click me";

export const Normal: ButtonComponentStory = () => <Button label={label} />;

export const Primary: ButtonComponentStory = () => (
  <Button primary label={label} />
);

export const Secondary: ButtonComponentStory = () => <Button label={label} />;
