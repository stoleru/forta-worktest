import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders BTC and ETH prices', async () => {
  render(<App />);
  
  // Initial loading text
  expect(screen.getByText('BTC Price: ')).toBeInTheDocument();
  expect(screen.getByText('ETH Price: ')).toBeInTheDocument();

  // Wait for prices to load
  const btcPriceElement = await screen.findByText(/BTC Price:/);
  const ethPriceElement = await screen.findByText(/ETH Price:/);

  expect(btcPriceElement).toBeInTheDocument();
  expect(ethPriceElement).toBeInTheDocument();
});

test('refreshes prices on button click', async () => {
  render(<App />);

  const refreshButton = screen.getByText('Refresh Prices');
  fireEvent.click(refreshButton);

  // Prices should be updated after button click
  const btcPriceElement = await screen.findByText(/BTC Price:/);
  const ethPriceElement = await screen.findByText(/ETH Price:/);

  expect(btcPriceElement).toBeInTheDocument();
  expect(ethPriceElement).toBeInTheDocument();
});
