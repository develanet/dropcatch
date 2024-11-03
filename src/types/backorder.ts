export interface Backorder {
  Domain: string | null;
  Amount: number | null;
  MaxBid: number | null;
  Type: BackorderType;
  DropDate: string; // ISO 8601 date-time string
}

export type BackorderType = "Standard" | "DiscountClub";

export type Tlds = "Com" | "Net" | "Org" | "Cc" | "Tv";

export interface BackorderError {
  Domain: string | null;
  Error: ErrorDetails | null;
}

export interface ErrorDetails {
  ErrorCode: string | null;
  Description: string | null;
  InnerError: ErrorDetails | null;
}

export interface BulkBackorderResult {
  Successes: Backorder[] | null;
  Failures: BackorderError[] | null;
}

export interface UpsertBackorder {
  Domain: string | null;
  Amount?: number | null;
  Type?: BackorderType | null;
}

export interface CancelBackordersResult {
  Successes: string[] | null;
  Failures: BackorderError[] | null;
}

export type BackorderSort =
  | "DomainAsc"
  | "DomainDesc"
  | "DropDateAsc"
  | "DropDateDesc"
  | "TypeAsc"
  | "TypeDesc"
  | "MaxBidAsc"
  | "MaxBidDesc";
