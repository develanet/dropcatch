/**
 * Represents the request body for obtaining an authorization token.
 */
export interface GetToken {
  /**
   * The name of your API client.
   */
  clientId?: string;

  /**
   * The password for your API client.
   */
  clientSecret?: string;
}

/**
 * Represents the response received after a successful authorization request.
 */
export interface AuthorizeResponse {
  token?: string;
}
