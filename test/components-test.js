import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'
import uuid from 'node-uuid';

import App from '../app/components/App'
import Note from '../app/components/Note'
import Notes from '../app/components/Notes'

//does a ul with lis render on the page?
test('<Notes />', t => {
  t.plan(2)
  // arrange
  const props = [
    {
    id: uuid.v4(),
    task: 'Learn Webpack'
    },
    {
    id: uuid.v4(),
    task: 'Learn React'
    },
    {
    id: uuid.v4(),
    task: 'Do laundry'
    }
  ]

  // action
  const wrapper = shallow(React.createElement(Notes, props))

console.log('ul', wrapper.find('ul'))

  // assert
  t.same(wrapper.find('ul').length, 1)
})

//is a new item successfully added?
