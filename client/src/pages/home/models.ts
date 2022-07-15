export type TransactionCardProps = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
};

export type InspiringAttributes = {
  image: string;
  name: string;
  link: string;
};

export type InspiredContainerProps = {
  inspirings: Array<InspiringAttributes>;
};
