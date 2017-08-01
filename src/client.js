import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from 'store'

import App from 'components/App'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

import 'styles/main.scss'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      {Component(store, ConnectedRouter, { history })}
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextApp = require('components/App')
    render(nextApp)
  })
}
