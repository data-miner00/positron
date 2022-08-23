import { ComponentMeta } from "@storybook/react";
import { withReactContext } from "storybook-react-context";

import { AppContext } from "setup/app-context-manager/AppContext";
import { TransactionsContext } from "setup/app-context-manager/TransactionsContext";
import TransferForm from "./TransferForm";

export default {
  title: "Fund Transfer Form",
  component: TransferForm,
  decorators: [
    withReactContext({
      Context: AppContext,
      initialState: {
        currentAccount: "0x430EF9263E06DAE63c84292C3409D61c598E9682",
      },
    }),
    withReactContext({
      Context: TransactionsContext,
      initialState: {
        transactions: [],
      },
    }),
  ],
} as ComponentMeta<typeof TransferForm>;

export const Default = () => <TransferForm />;
