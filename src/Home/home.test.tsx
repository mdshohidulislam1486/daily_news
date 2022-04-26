import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import * as ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<Home />);
  const linkOrginated = screen.getByText(/Link Orginated/i);
  const creadetAt  = screen.getByText(/Created at/i);
  expect(linkOrginated).toBeInTheDocument();
  expect(creadetAt).toBeInTheDocument(); 
});


describe('Check if all the componets is avialable', () => {
 let homePage:HTMLDivElement;

 beforeEach(()=>{
  homePage = document.createElement('div');
  document.body.appendChild(homePage)
  // eslint-disable-next-line testing-library/no-render-in-setup
  ReactDOM.render(<Home/>, homePage)
 })

 afterEach(()=>{
   document.body.removeChild(homePage)
   homePage.remove()
 })

 

})

