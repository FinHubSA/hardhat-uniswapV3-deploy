# @uniswap/hardhat-v3-deploy

Deploy Uniswap V3 contracts in development.

## Setup

Clone this project on your local machine.

```bash
git clone
```

Install all the required dependencies uisng npm install.

```bash
npm install
```

This command will:

- Install the [uniswap V3 core and periphery](https://docs.uniswap.org/contracts/v3/overview) contract files.
- Install the [uniswap V3 hardhat deploy scripts](https://github.com/Uniswap/hardhat-v3-deploy).

Great! Now, to deploy the contracts:

```sh
npx run hardhat deploy-uniswap
```

This command will:

- Deploy the uniswap V3 smart contracts on your local Ethereum chain (We have set the default network to be localhost in the hardhat.config.ts file).
- Display the addresses of the smart contracts you can use to interact with the uniswap DEX.
- NOTE: A local instance of hardhat should be running. If you are using scaffold-eth first run `yarn chain` in your project and then deploy the uniswap V3 contracts.

And you're done. Time to build something great.
