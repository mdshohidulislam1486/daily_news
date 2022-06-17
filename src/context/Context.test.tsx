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





describe("<Context/> test", ()=>{
  

    it('get sample data', async() => {
        const mScrollIntoView = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = mScrollIntoView;
    const news = [{"created_at":"2022-06-17T21:17:01.000Z","title":"Hoboken Hasn’t Had a Traffic Death in 4 Years. What’s Right?","url":"https://www.curbed.com/2022/06/hoboken-traffic-deaths-none-vision-zero-streets.html","author":"jseliger","points":1,"story_text":null,"comment_text":null,"num_comments":0,"story_id":null,"story_title":null,"story_url":null,"parent_id":null,"created_at_i":1655500621,"_tags":["story","author_jseliger","story_31784484"],"objectID":"31784484","_highlightResult":{"title":{"value":"Hoboken Hasn’t Had a Traffic Death in 4 Years. What’s Right?","matchLevel":"none","matchedWords":[]},"url":{"value":"https://www.curbed.com/2022/06/hoboken-traffic-deaths-none-vision-zero-streets.html","matchLevel":"none","matchedWords":[]},"author":{"value":"jseliger","matchLevel":"none","matchedWords":[]}}}]
        const { rerender } = render(
          <MyNewsContext.Provider value={news}>
            <Context children={<App/>} />
          </MyNewsContext.Provider>
        );
        expect(mScrollIntoView).not.toBeCalled();
    
        rerender(
          <MyNewsContext.Provider value={news}>
            <Context children={<App/>}  />
          </MyNewsContext.Provider>
        );
        expect(mScrollIntoView).toBeCalledTimes(0);
      });
})