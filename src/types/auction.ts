// Enum for Auction Types
export enum AuctionType {
  Dropped = "Dropped",
  PrivateSeller = "PrivateSeller",
  PreRelease = "PreRelease",
}

// Type for the Auction object
export interface Auction {
  AuctionId: number; // Id of the auction
  Name?: string; // Domain name of the auction
  EndTime: string; // Date and time when the auction ends (ISO 8601 format)
  Winning: boolean; // Whether you are winning the auction or someone else is
  HighestBidder?: string; // The alias of the current high bidder
  HighestBidderAccountId: number; // The account id of the current high bidder
  HighBidderNextValidBid: number; // The lowest possible next bid for the winning auction participant
  HighBid: number; // The amount of the current highest bid
  MaxBid: number; // Your max bid amount for use with proxy bidding
  NumberOfBidders: number; // The number of users participating in the auction
  MinimumNextBid: number; // The lowest possible next bid
  BidIncrement: number; // Current Bid Increment
  Type: AuctionType; // Auction Type
}

// Enum for Auction Sorting Options
export enum AuctionSort {
  DomainAsc = "DomainAsc",
  DomainDesc = "DomainDesc",
  EndTimeAsc = "EndTimeAsc",
  EndTimeDesc = "EndTimeDesc",
  HighBidAsc = "HighBidAsc",
  HighBidDesc = "HighBidDesc",
  HighBidderAsc = "HighBidderAsc",
  HighBidderDesc = "HighBidderDesc",
  BidsAsc = "BidsAsc",
  BidsDesc = "BidsDesc",
  MaxBidAsc = "MaxBidAsc",
  MaxBidDesc = "MaxBidDesc",
}

// Type for auction bid result object
export interface AuctionBid {
  Alias?: string;
  AccountId?: string;
  Amount: number;
  IsProxy: boolean;
  IsHighBid: boolean;
  BidOrder: number;
  Created: string; // Date and time when the bid was created (ISO 8601 format)
}

// Enum for Auction Bid Sorting Options
export enum AuctionBidSort {
  HighBidAsc = "HighBidAsc",
  HighBidDesc = "HighBidDesc",
  BidderAsc = "BidderAsc",
  BidderDesc = "BidderDesc",
}

// Type for the result of fetching auction bids
export interface AuctionBidsResult {
  Bids?: AuctionBid[];
  NumberOfBids: number;
  NumberOfBidders: number;
}
