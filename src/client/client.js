import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'

// Reducers
import reducers from './reducers'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(reducers, JSON.parse(window.INITIAL_STATE), applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
