import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StatsAttributes } from "pages/home/models";

import StatsCard from "./StatsCard";

export default {
  title: "Statistics Card",
  component: StatsCard,
  argTypes: {
    figure: {
      type: "string",
      defaultValue: "10 ETH",
    },
    description: {
      type: "string",
      defaultValue: "Fully Diluted Market Cap",
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          maxWidth: "300px",
          backgroundColor: "#333",
          borderRadius: "5px",
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof StatsCard>;

const Template = (args: StatsAttributes) => <StatsCard {...args} />;

export const Default: ComponentStory<typeof StatsCard> = Template.bind({});
