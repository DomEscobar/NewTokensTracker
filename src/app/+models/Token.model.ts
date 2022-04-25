export interface TokenModel {
    log: LogData;
    name: string;
    symbol: string;
    holders: number;
}

interface LogData {
    blockNumber: number;
    address: string;
    topics: string[];
    transactionHash: string;
}
