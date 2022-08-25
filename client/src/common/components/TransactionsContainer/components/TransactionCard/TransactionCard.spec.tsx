import { screen, render } from "@testing-library/react";
import { TransactionCardProps } from "common/components/models";
import { shortenAddress } from "common/utils/shortenAddress";

import TransactionCard from "./TransactionCard";

describe("TransactionCard", () => {
  it("should be rendered without error", () => {
    const props: TransactionCardProps = {
      addressTo: "0xtest_long_long_receiver_address",
      addressFrom: "0xtest_long_long_sender_address",
      timestamp: "2022-08-24T15:44:44.335Z",
      keyword: "hello",
      message: "Good morning",
      amount: "4.34",
    };

    render(<TransactionCard {...props} />);

    // const addressToElement = screen.getByText(
    //   shortenAddress(props.addressTo, 8)
    // );
    // const addressFromElement = screen.getByText(
    //   shortenAddress(props.addressFrom, 8)
    // );
    const amountElement = screen.getByText(props.amount);

    // expect(addressToElement).toBeInTheDocument();
    // expect(addressFromElement).toBeInTheDocument();
    expect(amountElement).toBeInTheDocument();
  });
});
