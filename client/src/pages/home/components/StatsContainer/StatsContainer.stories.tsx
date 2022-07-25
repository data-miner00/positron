import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StatsContainerProps } from "pages/home/models";

import StatsContainer from "./StatsContainer";

export default {
  title: "Statistics Container",
  component: StatsContainer,
  // argTypes: {
  //   numOfCards: {
  //     type: "number",
  //     defaultValue: 3,
  //   },
  // },
} as ComponentMeta<typeof StatsContainer>;

const Template: ComponentStory<typeof StatsContainer> = (
  args: StatsContainerProps
) => <StatsContainer {...args} />;

export const Default: ComponentStory<typeof StatsContainer> = Template.bind({});
Default.args = {
  stats: [
    {
      figure: "4 Txns",
      description: "Transaction count as of 5 July 2022",
    },
    {
      figure: "6 ETH",
      description: "Total ETH volume as of 5 July 2022",
    },
    {
      figure: "$5k",
      description: "Volume in USD as of 5 July 2022",
    },
  ],
};

export const FiveCards: ComponentStory<typeof StatsContainer> = Template.bind(
  {}
);
FiveCards.args = {
  stats: [
    { figure: "25", description: "Years of professional license" },
    ...Default.args.stats!,
    { figure: "25", description: "Years of professional license" },
  ],
};
