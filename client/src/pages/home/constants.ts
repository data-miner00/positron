import { cardano, chainlink, ens, oneinch, ren } from "assets";
import { InspiringAttributes, StatsAttributes } from "./models";

export const inspirings: Array<InspiringAttributes> = [
  {
    name: "Cardano",
    image: cardano,
    link: "https://cardano.org/",
  },
  {
    name: "1inch",
    image: oneinch,
    link: "https://1inch.io/",
  },
  {
    name: "ENS",
    image: ens,
    link: "https://ens.domains/",
  },
  {
    name: "Ren",
    image: ren,
    link: "https://renproject.io/",
  },
  {
    name: "Chainlink",
    image: chainlink,
    link: "https://chain.link/",
  },
];

export const stats: Array<StatsAttributes> = [
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
];
