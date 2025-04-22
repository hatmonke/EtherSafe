import { chainId } from './config';

export function parseChainId(chainIdHex: string | null) {
    return parseInt(chainIdHex ?? '').toString();
}

export function checkChainIdIncluded(chainIdHex: string | null) {
    const ChainId = parseChainId(chainIdHex);
    return ChainId === chainId.toString();
}