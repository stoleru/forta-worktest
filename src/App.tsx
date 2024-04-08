import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.coinbase.com/v2/prices';

interface Price {
  currency: string;
  amount: string;
}

const App: React.FC = () => {
  const [btcPrice, setBtcPrice] = useState<Price>({ currency: '', amount: '' });
  const [ethPrice, setEthPrice] = useState<Price>({ currency: '', amount: '' });

  const fetchPrices = async () => {
    try {
      const response = await axios.get(`${API_URL}/btc-usd/spot`);
      setBtcPrice(response.data.data);

      const ethResponse = await axios.get(`${API_URL}/eth-usd/spot`);
      setEthPrice(ethResponse.data.data);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div>
      <h1>Crypto Price Tracker</h1>
      <div>
        <h2>BTC Price: {btcPrice.amount} {btcPrice.currency}</h2>
        <h2>ETH Price: {ethPrice.amount} {ethPrice.currency}</h2>
      </div>
      <button onClick={fetchPrices}>Refresh Prices</button>
    </div>
  );
};

export default App;
