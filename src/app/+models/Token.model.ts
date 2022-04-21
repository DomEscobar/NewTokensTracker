export interface TokenModel {
    block: BlockData;
    smartContract: SmartContractData;
}

interface BlockData {
    height: number;
    timestamp: { time: string };
}

interface SmartContractData {
    contractType: string;
    address: { address: string, annotation: string }
    currency: { name: string; symbol: string; decimals: number; tokenType: string }
}