import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {
  private_key_1,
  private_key_2,
  private_key_3,
  sepoliarpc,
  baserpc,
  etherscan_api_key,
  basescan_api_key,
  private_key_base,
} from '../secrets.json';

const config: HardhatUserConfig = {
  solidity: '0.8.13',
  networks: {
    // 'base-mainnet': {
    //   url: 'https://mainnet.base.org',
    //   accounts: [],
    //   gasPrice: 1000000000,
    // },
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [private_key_base],
      gasPrice: 1000000000,
    },
    // 'base-local': {
    //   url: 'http://localhost:8545',
    //   accounts: [],
    //   gasPrice: 1000000000,
    // },
    sepolia: {
      url: sepoliarpc,
      accounts: [private_key_1, private_key_2, private_key_3],
    },
    base: {
      url: baserpc,
      accounts: [private_key_base],
    },
    hardhat: {
      forking: {
        url: baserpc,
      },
    },
  },
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
      sepolia: etherscan_api_key,
      baseGoerli: basescan_api_key,
    },
  },
};

export default config;
