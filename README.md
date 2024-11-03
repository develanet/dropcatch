# DropCatch API Client for Javascript & Typescript

This unofficial package is a Node.js client library for interacting with the [DropCatch.com](https://www.dropcatch.com/) API. This library provides convenient methods for accessing DropCatch's services, including auctions, bids, backorders, and history.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Installation](#installation-in-javascript-and-typescript)
  - [Authorization](#authorization)
  - [Auctions](#auctions)
  - [Bids](#bids)
  - [Backorders](#backorders)
  - [History](#history)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the library using npm:

```bash
npm install dropcatch
```

or using yarn:

```bash
yarn add dropcatch
```

## Features

- **Authorization**: Obtain and manage access tokens for interacting with the DropCatch API.
- **Auctions**: Retrieve auction information, search for auctions, and fetch bid history.
- **Bids**: Manage bids, including placing new bids.
- **Backorders**: Create, retrieve, and cancel backorders.
- **History**: Access historical data for auctions and backorders.

## Usage

### Installation in JavaScript and TypeScript

**JavaScript**:

```javascript
const DropCatchClient = require("dropcatch").default;

const client = new DropCatchClient();
```

**TypeScript**:

```typescript
import DropCatchClient from "dropcatch";

const client = new DropCatchClient();
```

### Authorization

Authorize the client using your credentials to obtain an access token.

```javascript
async function authorizeClient() {
  const credentials = {
    clientId: "your_client_id",
    clientSecret: "your_client_secret",
  };

  try {
    const { token } = await client.authorize(credentials);

    console.log("Access token obtained:", token);

    // Start making calls here
  } catch (error) {
    console.error("Authorization failed:", error);
  }
}

authorizeClient();
```

### Auctions

Retrieve a specific auction by its ID or search for active auctions.

```javascript
async function fetchAuctions() {
  try {
    const credentials = {
      clientId: "your_client_id",
      clientSecret: "your_client_secret",
    };

    const { token } = await client.authorize(credentials);

    const auction = await client.getAuction(12345);
    console.log("Auction Details:", auction);

    const auctions = await client.getAuctions({ searchTerm: "example" });
    console.log("Active Auctions:", auctions);
  } catch (error) {
    console.error("Error fetching auctions:", error);
  }
}

fetchAuctions();
```

### Bids

Fetch bids and place new bids.

```javascript
async function manageBids() {
  try {
    const bids = await client.getBids();
    console.log("Your Bids:", bids);

    const newBids = [{ auctionId: 12345, bidAmount: 100 }];
    const response = await client.placeBids(newBids);
    console.log("Place Bid Response:", response);
  } catch (error) {
    console.error("Error managing bids:", error);
  }
}

manageBids();
```

### Backorders

Create, retrieve, and cancel backorders.

```javascript
async function manageBackorders() {
  try {
    const backorders = await client.getBackorders();
    console.log("Active Backorders:", backorders);

    const newBackorders = [{ domain: "example.com", type: "public" }];
    const response = await client.createBackorders(newBackorders);
    console.log("Create Backorder Response:", response);

    const cancelResponse = await client.cancelBackorders(["example.com"]);
    console.log("Cancel Backorder Response:", cancelResponse);
  } catch (error) {
    console.error("Error managing backorders:", error);
  }
}

manageBackorders();
```

### History

Access historical data for auctions and backorders.

```javascript
async function fetchHistory() {
  try {
    const auctionHistory = await client.getAuctionHistory({
      searchTerm: "example",
    });
    console.log("Auction History:", auctionHistory);

    const backorderHistory = await client.getBackorderHistory({
      searchTerm: "example",
    });
    console.log("Backorder History:", backorderHistory);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
}

fetchHistory();
```

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
