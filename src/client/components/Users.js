import React, { Component, useEffect } from 'react'
import { fetchUsers } from '../actions'
import { connect } from 'react-redux'

class Users extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    console.log({ aaa: this.props })
    return (
      <div>
        Users are displayed here
        <ul>
          {(this.props.users || []).map((user) => (
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

export default connect(mapStateToProps, { fetchUsers })(Users)
