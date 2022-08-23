import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TransactionCardProps } from "common/components/models";
import TransactionCard from "./TransactionCard";

export default {
  title: "Transaction Card",
  component: TransactionCard,
  argTypes: {
    addressFrom: { type: "string" },
    addressTo: { type: "string" },
    timestamp: { type: "string" },
    message: { type: "string" },
    keyword: { type: "string" },
    amount: { type: "number" },
  },
} as ComponentMeta<typeof TransactionCard>;

const Template = (args: TransactionCardProps) => <TransactionCard {...args} />;

export const Default: ComponentStory<typeof TransactionCard> = Template.bind(
  {}
);
Default.args = {
  addressFrom: "0x1234567890qweeryuioop",
  addressTo: "0x6666667890qweeryuioop",
  timestamp: "2 weeks ago",
  message: "hello world",
  keyword: "sand",
  amount: "1.56",
};
