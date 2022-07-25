import { ComponentMeta } from "@storybook/react";
import { AppContext } from "setup/app-context-manager/AppContext";
import { withReactContext } from "storybook-react-context";
import AccountInfo from "./AccountInfo";

export default {
  title: "Account Info",
  component: AccountInfo,
  decorators: [
    withReactContext({
      Context: AppContext,
      initialState: {
        currentAccount: "0x430EF9263E06DAE63c84292C3409D61c598E9682",
      },
    }),
  ],
} as ComponentMeta<typeof AccountInfo>;

export const Default = () => <AccountInfo />;
