import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FaAirbnb } from "react-icons/fa";

import { ImgButtonProps } from "../models";
import ImgButton from "./ImgButton";

export default {
  title: "Image Button",
  component: ImgButton,
} as ComponentMeta<typeof ImgButton>;

const Template = (args: ImgButtonProps) => <ImgButton {...args} />;

export const Default: ComponentStory<typeof ImgButton> = Template.bind({});
Default.args = {
  img: <FaAirbnb />,
};
