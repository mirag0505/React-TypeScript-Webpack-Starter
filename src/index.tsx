import './i18n'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import rootStore from '../src/redux/rootStore'
import { App } from './App'

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
