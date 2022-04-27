/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

test('renders learn react link', () => {
  render(<Home />);
  const linkOrginated = screen.getByText(/Link Orginated/i);
  const creadetAt  = screen.getByText(/Created at/i);
  expect(linkOrginated).toBeInTheDocument();
  expect(creadetAt).toBeInTheDocument(); 
});

test('get the table', ()=> {
render(<Home/>)
const myTable= screen.getAllByRole('table')
expect(myTable.length).toEqual(1)
})


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

 it('Home page is rendered acoordingly', ()=>{
   const tBody = homePage.querySelectorAll('h3')
   
   expect(tBody).toHaveLength(1)
   expect(tBody[0].innerHTML).toBe('Latest News') 
 })
})

  