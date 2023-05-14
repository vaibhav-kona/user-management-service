import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import { fetchCurrentUser } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount () {
    this.props.fetchCurrentUser()
  }

  render () {
    return (
      <div>
        <Header/>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default {
  component: connect(() => {}, { fetchCurrentUser })(App),
  loadData: (store) => {
    return store.dispatch(fetchCurrentUser())
  }
}
