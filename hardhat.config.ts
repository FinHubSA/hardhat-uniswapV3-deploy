import * as dotenv from "dotenv";
import { type HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@uniswap/hardhat-v3-deploy";

dotenv.config();

const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ??
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.7.0",
  defaultNetwork: "localhost",
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    "uct_finhub-devnet-1": {
      url: "http://34.10.136.98:8545",
      accounts: [deployerPrivateKey],
    },
  },
};

export default config;
