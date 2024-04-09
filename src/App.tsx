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
  const [error, setError] = useState<String>('')

  const fetchPrices = async () => {
    try {
      const response = await axios.get(`${API_URL}/btc-usd/spot`);
      setBtcPrice(response.data.data);

      const ethResponse = await axios.get(`${API_URL}/eth-usd/spot`);
      setEthPrice(ethResponse.data.data);
    } catch (error) {
      setError(String(error))
      console.error('Error fetching prices:', error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-2">Crypto Price Tracker</h1>
      <div className="leading-8">
        {btcPrice?.amount && (
          <p><small>BTC Price:</small> <strong>{btcPrice.amount} {btcPrice.currency}</strong></p>
        )}
        {ethPrice?.amount && (
          <p><small>ETH Price:</small> <strong>{ethPrice.amount} {ethPrice.currency}</strong></p>
        )}
        {error && <p className="text-red-600">{error}</p>}
      </div>
      <button className="mt-4 rounded-md text-white bg-green-900 px-4 py-2 hover:opacity-70" onClick={fetchPrices}>Refresh Prices</button>
    </div>
  );
};

export default App;
