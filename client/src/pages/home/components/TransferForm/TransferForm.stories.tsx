import { ComponentMeta } from "@storybook/react";
import { AppContext } from "setup/app-context-manager/AppContext";
import { withReactContext } from "storybook-react-context";
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
  ],
} as ComponentMeta<typeof TransferForm>;

export const Normal = () => <TransferForm />;
