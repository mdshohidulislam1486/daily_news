import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import {BrowserRouter as Router} from 'react-router-dom';
import { MyNewsContext } from '../context/Context';




test('Check if the home page is rendered successfully', () => {
    render(<Router><Home/></Router>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

test('Chaeck the button is disabled and enabled properly', async() =>{
  render(<Router><Home/></Router>)
  const listItems = screen.getAllByTestId('each-page')
  const previousButton =  screen.getByText(/previous/i)
  expect(previousButton).toBeDisabled()
  expect(listItems).toHaveLength(2)  

})  
test('Chaeck the next button is disabled and enabled properly', async() =>{
  render(<Router><Home/></Router>)
  const listItems = screen.getAllByTestId('each-page')
  const previousButton =  screen.getByText(/next/i)
  expect(previousButton).toBeDisabled()
  expect(listItems).toHaveLength(2)
  const headLine = await screen.findByText(/Hoboken Hasn’t Had a Traffic Death in 4 Years. What’s Right?/i)
  expect(headLine).toBeInTheDocument()

})  