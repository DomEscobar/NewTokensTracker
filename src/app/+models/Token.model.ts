export interface TokenModel {
    log: LogData;
    name: string;
    symbol: string;
    holders: number;
    liquidityData: { address: string, fromBlock: number }
    time: number | Date
    isBuyable: boolean;
}

interface LogData {
    blockNumber: number;
    address: string;
    topics: string[];
    transactionHash: string;
}
