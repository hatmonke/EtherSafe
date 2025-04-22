import { createConfig, http, fallback } from "wagmi";
import { Chain } from "wagmi/chains";
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const mainnet = ({
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://eth.llamarpc.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' as `0x${string}`,
    },
    ensUniversalResolver: {
      address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67'as `0x${string}`,
      blockCreated: 19_258_213,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11'as `0x${string}`,
      blockCreated: 14_353_601,
    },
  },
})

export const milkomeda = {
  id: 2001,
  name: "Milkomeda",
  network: "Milkomeda",
  nativeCurrency: {
    decimals: 18,
    name: "Cardano",
    symbol: "ADA",
  },
  rpcUrls: {
    public: { http: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"] },
    default: { http: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Blockscout",
      url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
    },
    default: {
      name: "Blockscout",
      url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0x6fc0A9A23147D8e38570BDbC7A078Ec7ea36633A",
      blockCreated: 13951521,
    },
  },
};

const chains: readonly [Chain, ...Chain[]] = [mainnet]; // replace with your actual chains

export 
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
  ssr: true, // If your dApp uses server side rendering (SSR)
});