import React, { Component } from 'react'
import { fetchUsers } from '../actions'
import { connect } from 'react-redux'

class Users extends Component {
  componentDidMount () {
    // This is still needed as if there is client side routing on the browser,
    // the initial state for users won't be present and this page will show empty data
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
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
