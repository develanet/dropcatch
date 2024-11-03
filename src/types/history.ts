export enum HistoryStatus {
  InAuction = "InAuction",
  AuctionWon = "AuctionWon",
  AuctionLost = "AuctionLost",
  Missed = "Missed",
  Successful = "Successful",
  LostPreemptDiscount = "LostPreemptDiscount",
  LostPreemptPartner = "LostPreemptPartner",
  LostPreemptStandard = "LostPreemptStandard",
  Purchased = "Purchased",
  Suspended = "Suspended",
}

export enum HistoryType {
  Auction = "Auction",
  Backorder = "Backorder",
}

export enum HistorySort {
  DomainAsc = "DomainAsc",
  DomainDesc = "DomainDesc",
  AmountAsc = "AmountAsc",
  AmountDesc = "AmountDesc",
  StatusAsc = "StatusAsc",
  StatusDesc = "StatusDesc",
  UpdatedAsc = "UpdatedAsc",
  UpdatedDesc = "UpdatedDesc",
}

export interface History {
  Id: string | null;
  AccountId: number;
  Domain: string | null;
  ShortName: string | null;
  ShortNameSplit: string | null;
  Amount: number;
  PreemptAmount: number | null;
  CreatedDate: string; // ISO date string
  UpdatedDate: string; // ISO date string
  Status: HistoryStatus;
  Bidders: number[] | null;
  WinnerId: number | null;
  ReceiptReferenceId: number | null;
  DocumentType: string | null;
}

export interface HistorySearchItem {
  Domain: string | null;
  Amount: number;
  Date: string; // ISO date string
  Result: string | null;
  Type: HistoryType;
  ReferenceId: number;
}

export interface HistoryResponse {
  items: History[];
  totalRecords: number;
  cursor: {};
}
