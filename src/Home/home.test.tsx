import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkOrginated = screen.getByText(/Link Orginated/i);
  const creadetAt  = screen.getByText(/Created at/i);
  expect(linkOrginated).toBeInTheDocument();
  expect(creadetAt).toBeInTheDocument(); 
});
