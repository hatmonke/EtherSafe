/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_APP_RPC_URL : "https://eth.llamarpc.com", //"https://bsc-dataseed.binance.org/" 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com'
        ALCHEMY_ID: '3DJxxIXJwUcsoy05ARRVuaBkToDBsRg8'
    },
}

module.exports = nextConfig
