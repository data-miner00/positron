export type ChildProps = {
  children: JSX.Element;
};

export type Transaction = {
  addressTo: string;
  addressFrom: string;
  timestamp: Date;
  message: string;
  keyword: string;
  amount: string;
};
