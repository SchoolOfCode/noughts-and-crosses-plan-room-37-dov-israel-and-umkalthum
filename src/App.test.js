import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tick tack toe title', () => {
  render(<App />);
  const titleElement = screen.getByText(/tick tack toe/i);
  expect(titleElement).toBeInTheDocument();
});
