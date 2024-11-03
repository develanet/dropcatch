export interface Bid {
  AuctionId: number;
  Domain?: string;
  IsWinning: boolean;
  HighBid: number;
  MaxBid: number;
}

export type BidSort =
  | "HighBidAsc"
  | "HighBidDesc"
  | "MaxBidAsc"
  | "MaxBidDesc"
  | "DomainAsc"
  | "DomainDesc";

export interface PlaceBid {
  AuctionId: number;
  Amount: number;
}

export interface PlaceBidResult {
  AuctionId: number;
  BidResult: BidResultType;
  Winning: boolean;
  HighBid: number;
  NextValidBid: number;
  HighBidder?: string;
  EndTime: string;
  MaxBid?: number;
  NumberOfBids: number;
}

export type BidResultType =
  | "Success"
  | "Outbid"
  | "BidNotValid"
  | "AuctionEnded"
  | "AuctionInvalid";

export interface BidErrorResult {
  AuctionId: number;
  Error?: Error;
}

export interface BulkBidResult {
  Successes?: PlaceBidResult[];
  Failures?: BidErrorResult[];
}

export interface Error {
  ErrorCode?: string;
  Description?: string;
  InnerError?: Error;
}
