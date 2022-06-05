import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import {Context, MyNewsContext} from './Context';
import { act } from 'react-dom/test-utils';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// var ShallowRenderer = require('react-test-renderer/shallow');





describe("news lenght will be 20", ()=>{
    it("sets is get the news lenght", ()=>{
        const TestComponets =() =>{
            const {news}:any = React.useContext(MyNewsContext)
            
            return <>
            <div>
               {news.lenght}
            </div>
            </> 
        }
    const wrapper = mount(<Context><TestComponets/></Context>)
    })
})

/* test('Get the list of news with axios get request', async() =>{

    
    useContextMock.mockReturnValue("Test Value");
    const  element = await new ShallowRenderer().render(
        <Context children={<div></div>} />
    );

   
  })  */