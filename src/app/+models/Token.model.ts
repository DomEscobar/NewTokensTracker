export interface TokenModel {
    log: LogData;
    name: string;
}

interface LogData {
    blockNumber: number;
    address: string;
    topics: string[];
    transactionHash: string;
}
