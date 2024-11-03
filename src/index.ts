import DropCatchClient from "./client";

// Re-exporting the client class so that users can import it
export { DropCatchClient };

// Optionally, export types if users need to use them directly
export * from "./types/authorization";
export * from "./types/auction";
export * from "./types/backorder";
export * from "./types/bid";
export * from "./types/history";

// Default export for convenience
export default DropCatchClient;
