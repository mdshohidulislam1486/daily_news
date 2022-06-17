import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import {Context, MyNewsContext} from './Context';
import { act } from 'react-dom/test-utils';

import { configure, EnzymeAdapter, mount } from 'enzyme';
import { jsx } from '@emotion/react';
import { JsxEmit } from 'typescript';
import App from '../App';


configure({ adapter: new EnzymeAdapter() });


// var ShallowRenderer = require('react-test-renderer/shallow');





describe("news lenght will be 20", ()=>{
    interface children{
        children:JSX.Element
      }

    it('should scroll into AnotherComponent when date is updated', () => {
        const mScrollIntoView = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = mScrollIntoView;
    
        const { rerender } = render(
          <MyNewsContext.Provider value={[]}>
            <Context children={<App/>} />
          </MyNewsContext.Provider>
        );
        expect(mScrollIntoView).not.toBeCalled();
    
        rerender(
          <MyNewsContext.Provider value={[]}>
            <Context children={<App/>}  />
          </MyNewsContext.Provider>
        );
        expect(mScrollIntoView).toBeCalled();
      });

})