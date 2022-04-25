import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Knwo if latest news is found', () => {
  render(<App />);
 
 
  const linkElement = screen.getByText(/latest news/i);

  expect(linkElement).toBeInTheDocument();
});
