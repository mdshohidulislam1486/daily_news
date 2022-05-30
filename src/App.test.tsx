import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home/Home';



test('render my whole app checking if the app has rendered sucessfully', () => {
    render(<App/>);
    expect(screen.getByText('Latest News')).toBeInTheDocument();
  });     