/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';


test('renders learn react link', () => {
  render(<Home/>);
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

 it('get a specific elements in your content with length', ()=>{
   // eslint-disable-next-line testing-library/no-node-access
   const tBody = homePage.querySelectorAll('h3')
   expect(tBody).toHaveLength(1)
 })
})



