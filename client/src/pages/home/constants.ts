import { cardano, chainlink, ens, oneinch, ren } from "assets";
import { InspiringAttributes } from "./models";

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
