import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const password = screen.getByText(/password/i);
  expect(password).toBeInTheDocument();
});
