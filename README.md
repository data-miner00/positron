# Positron+

Positron+ is a simple dapps that allows user to send ethers and attach a message and keyword along with the transaction.

## Tech Stacks

The list of technologies used for this project.

**Front-end**

- [React (cra)](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org)
- [Ethers.js](https://docs.ethers.io/v5/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

**Smart Contracts**

- [Truffle](https://trufflesuite.com/)

## Demo

Landing page of the Dapp.

![Positron landing page](./screenshots/positron_ui.png)

After connecting the Metamask wallet and filling up the forms for transfer, two Metamask prompt will popup consequently. The first one is to confirm the transaction to send the ethers to the destination address.

![Sending Eth prompt](./screenshots/metamask_prompt_send_eth.png)

The second prompt will ask for confirmation to interact with the smart contract so that the data will be written to the blockchain.

![Interacting with Smart Contract](./screenshots/metamask_prompt_contract.png)

After executing all the transactions, Metamask will notify us upon confirmed transactions.

![Metamask notification for confirmed transactions](./screenshots/confirmed_transaction.png)

The transaction added will be displayed in a card.

![Transaction card](./screenshots/tx_card.png)

All the transactions can be viewed in the `/transactions` page.

![Transactions page](./screenshots/transactions.png)

## Development

### Smart Contracts

The framework for managing smart contract used is [Truffle](https://trufflesuite.com/). To install Truffle

```
npm i -g truffle
```

Install Node dependencies

```
pnpm i
```

Build and compile the smart contracts within the `contracts` folder

```
pnpm build
```

> Building contracts will product an artifact called `Transaction.json` that is required by the client project. The file can be cloned by running `../scripts/copy_abi.ps1`

Deploy the compiled contracts to local Ethereum network

```
pnpm migrate
```

> Before migration, create a file called `private-key.crt` and paste one of the account's private key and all the deployments will be performed under that account.

Spinup a local interactive Ethereum blockchain

```
pnpm dev
```

Alternatively, use [Truffle Ganache](https://trufflesuite.com/ganache/) to spinup a local Ethereum network with UI.

![Ganache](./screenshots/ganache_ui.png)

Run contract tests

```
pnpm test
```

Lint contracts

```
pnpm lint
```

### Client

To run the client locally, make sure to locate in the client first.

```
cd client
```

Installing Node dependencies by

```
yarn
```

Serve on localhost

```
yarn start
```

Running tests

```
yarn test
```

Build for deployment

```
yarn build
```

## Storybook

The development of the user interfaces are facilitated by the use of Storybook to document and produce prototypes quickly.

![Storybook](./screenshots/storybook_ui.png)

Start Storybook locally

```
yarn storybook

// or short form
yarn sb
```

Build Storybook for hosting

```
yarn build-storybook
```

## Roadmaps

The list of milestones that is planned to fulfill following the initial release.

- [ ] Personalized profile avatar
- [ ] Redesign landing page
- [ ] Make Nx monorepo
- [ ] Add more chain such as Algorand.
- [ ] Customize Storybook
- [x] Use Framer motion to animate elements

## Credits

- [React Context API Crash Course - Basics, Best Practices, When to use it?...](https://www.youtube.com/watch?v=t9WmZFnE6Hg)

- [The Container Pattern for Better State Management](https://betterprogramming.pub/the-container-pattern-for-better-state-management-in-react-9351fe4381d1)

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- [Pitfalls of Overusing React Context](https://blog.logrocket.com/pitfalls-of-overusing-react-context/)

## Resources

- [Writing Tests in JavaScript](https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript/)

- [Chai Assert API](https://www.chaijs.com/api/assert/)
