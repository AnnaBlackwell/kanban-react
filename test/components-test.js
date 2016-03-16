import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'

import App from '../app/components/App.jsx'
import Note from '../app/components/Note.jsx'
import Notes from '../app/components/Notes.jsx'

test(t => {
    t.same([1, 2], [1, 2]);
});

//does a ul with lis render on the page?
// test('<Notes />', t => {
//   t.plan(2)
//   // arrange
//   const props = [
//     {
//     id: uuid.v4(),
//     task: 'Learn Webpack'
//     },
//     {
//     id: uuid.v4(),
//     task: 'Learn React'
//     },
//     {
//     id: uuid.v4(),
//     task: 'Do laundry'
//     }
//   ]
//
//   // action
//   const wrapper = shallow(React.createElement(App, props))
//
//   // assert
//   t.same(wrapper.find('ul').length, 1)
//   t.same(wrapper.find('li')/length, 3)
// })

//is a new item successfully added?
