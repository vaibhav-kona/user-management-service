import React, { Component } from 'react'
import { fetchUsers } from '../actions'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

class Users extends Component {
  componentDidMount () {
    // This is still needed as if there is client side routing on the browser,
    // the initial state for users won't be present and this page will show empty data
    this.props.fetchUsers()
  }

  head () {
    return (
    <Helmet>
      <title>{`${this.props.users.length} Users Loaded`}</title>
      <meta property={'og:title'} content={'User'}></meta>
    </Helmet>
    )
  }

  render () {
    return (
      <div>
        {this.head()}
        <h4>Users are displayed here</h4>
        <ul>
          {(this.props.users).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { users: state.users }
}

function loadData (store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(Users),
  loadData
}
