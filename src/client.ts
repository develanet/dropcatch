import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  GetToken,
  AuthorizeResponse,
  Auction,
  AuctionBidsResult,
  AuctionSort,
  AuctionBidSort,
  Backorder,
  BackorderSort,
  BulkBackorderResult,
  UpsertBackorder,
  CancelBackordersResult,
  Bid,
  BidSort,
  BulkBidResult,
  PlaceBid,
  History,
  HistorySearchItem,
  HistorySort,
  HistoryResponse,
} from "./types";

/**
 * A client for interacting with the DropCatch API.
 */

class DropCatchClient {
  private apiClient: AxiosInstance;
  private baseURL: string = "https://api.dropcatch.com";

  /**
   * Creates an instance of DropCatchClient.
   * @param {string} [accessToken] - Optional access token for authorization.
   */

  constructor(private accessToken?: string) {
    this.apiClient = axios.create({
      baseURL: this.baseURL,
    });

    if (accessToken) {
      this.setAccessToken(accessToken);
    }
  }

  /**
   * Set the access token for the API client.
   * @param {string} token - The access token to be set.
   */
  private setAccessToken(token: string) {
    this.accessToken = token;
    this.apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Authorizes the client with given credentials.
   * @param {GetToken} credentials - The client credentials.
   * @returns {Promise<AuthorizeResponse>} - The authorization response.
   */
  async authorize(credentials: GetToken): Promise<AuthorizeResponse> {
    const response = await this.apiClient.post<AuthorizeResponse>(
      "/Authorize",
      credentials
    );
    if (response.data.token) {
      this.setAccessToken(response.data.token);
    }
    return response.data;
  }

  async getAuction(id: number): Promise<Auction> {
    const response = await this.apiClient.get<Auction>(`/v2/auctions/${id}`);
    return response.data;
  }

  async getAuctions(params?: {
    searchTerm?: string;
    size?: number;
    previous?: string;
    next?: string;
    showAllActive?: boolean;
    HasBids?: boolean;
    EndTime?: { Max?: string; Min?: string };
    Tlds?: string[];
    Types?: string[];
    HighBid?: { Max?: number; Min?: number };
    sort?: AuctionSort;
  }): Promise<Auction[]> {
    const response = await this.apiClient.get<Auction[]>("/v2/auctions", {
      params,
    });
    return response.data;
  }

  async getBidHistory(
    auctionId: number,
    params?: { size?: number; page?: number; sort?: AuctionBidSort }
  ): Promise<AuctionBidsResult> {
    const response = await this.apiClient.get<AuctionBidsResult>(
      `/v2/auctions/${auctionId}/bids`,
      { params }
    );
    return response.data;
  }

  async getBackorders(params?: {
    searchTerm?: string;
    size?: number;
    tld?: string;
    previous?: string;
    next?: string;
    type?: string;
    sort?: BackorderSort;
  }): Promise<Backorder[]> {
    const response = await this.apiClient.get<Backorder[]>("/v2/backorders", {
      params,
    });
    return response.data;
  }

  async createBackorders(
    backorders: UpsertBackorder[]
  ): Promise<BulkBackorderResult> {
    const response = await this.apiClient.put<BulkBackorderResult>(
      "/v2/backorders",
      backorders
    );
    return response.data;
  }

  async cancelBackorders(domains: string[]): Promise<CancelBackordersResult> {
    const response = await this.apiClient.delete<CancelBackordersResult>(
      "/v2/backorders",
      { data: domains }
    );
    return response.data;
  }

  async getBids(params?: {
    size?: number;
    previous?: string;
    next?: string;
    winning?: boolean;
    sort?: BidSort;
  }): Promise<Bid[]> {
    const response = await this.apiClient.get<Bid[]>("/v2/bids", { params });
    return response.data;
  }

  async placeBids(bids: PlaceBid[]): Promise<BulkBidResult> {
    const response = await this.apiClient.post<BulkBidResult>("/v2/bids", bids);
    return response.data;
  }

  async getAuctionHistory(params?: {
    searchTerm?: string;
    size?: number;
    previous?: string;
    next?: string;
    sort?: HistorySort;
  }): Promise<{ items: History[]; totalRecords: number; cursor: {} }> {
    const response = await this.apiClient.get<HistoryResponse>(
      "/v2/history/auctions",
      { params }
    );

    return response.data;
  }

  async getBackorderHistory(params?: {
    searchTerm?: string;
    size?: number;
    previous?: string;
    next?: string;
    sort?: HistorySort;
  }): Promise<HistorySearchItem[]> {
    const response = await this.apiClient.get<HistorySearchItem[]>(
      "/v2/history/backorders",
      { params }
    );
    return response.data;
  }
}

export default DropCatchClient;
