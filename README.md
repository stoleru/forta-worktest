# Crypto Price Tracker

## Introduction

Crypto Price Tracker is a React application built with TypeScript that allows users to track the prices of Bitcoin (BTC) and Ethereum (ETH) using the Coinbase public API. The app includes a button to refresh the prices and displays them in real-time.

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git (optional, for cloning the repository)

#### Getting Started

To get started with the Crypto Price Tracker app, follow these steps:

1. Clone the repository to your local machine using Git (or download the ZIP file and extract it):

```bash
git clone https://github.com/stoleru/forta-worktest.git
```

2. Navigate to the project directory:

```bash
cd forta-worktest
```

3. Install dependencies using npm:

```bash
npm install
```

#### Running the App

Once the dependencies are installed, you can run the app locally. Use the following command:

```bash
npm start
```

This will start the development server and open the app in your default web browser. If it doesn't open automatically, you can access it at http://localhost:3000.

#### Usage

- Upon launching the app, you will see the current prices of Bitcoin and Ethereum fetched from the Coinbase public API.
- To refresh the prices, simply click the "Refresh Prices" button.
- The prices will update in real-time based on the latest data from the Coinbase API.

#### Testing

The Crypto Price Tracker app includes unit tests to ensure the correctness of its functionality. You can run the tests using the following command:

```bash
npm test
```

This will execute the test suite and provide feedback on the app's behavior.

#### Built With

- React - JavaScript library for building user interfaces
- TypeScript - Typed superset of JavaScript
- Axios - Promise-based HTTP client for making API requests
- Jest - JavaScript testing framework
- React Testing Library - Testing utilities for React components
