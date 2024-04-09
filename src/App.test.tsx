import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

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
