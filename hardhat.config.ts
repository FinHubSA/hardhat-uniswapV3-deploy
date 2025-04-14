import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@uniswap/hardhat-v3-deploy";

const config: HardhatUserConfig = {
  solidity: "0.7.0",
  defaultNetwork: "localhost",
};

export default config;
