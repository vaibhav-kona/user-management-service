import React, { Component } from 'react'
import { fetchAdmins, fetchUsers } from '../actions'
import { connect } from 'react-redux'
import WithAuth from '../components/withAuth'

class Admins extends Component {
  componentDidMount () {
    this.props.fetchAdmins()
  }

  render () {
    console.log({ aaa: this.props.admins })
    if (this.props.auth) {
      return (
        <div>
          <h4>Admins are displayed here</h4>
          <ul>
          {(this.props.admins || []).map((admin) => (
            <li key={admin.id}>{admin.name}</li>
          ))}
          </ul>
        </div>
      )
    } else {
      return <div>Login to continue</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    admins: state.admins,
    auth: state.auth
  }
}

function loadData (store) {
  return store.dispatch(fetchAdmins())
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(WithAuth(Admins)),
  loadData
}
