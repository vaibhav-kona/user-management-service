import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  const authButton = props.auth
    ? <a href={'/api/logout'}>Logout</a>
    : <a href={'/api/auth/google'}>Login</a>

  return (
    <nav>
      <Link to={'/'}>User Management</Link>
      <div>
        <Link to={'/users'} style={{ margin: '0 8px 0 0' }}>Users</Link>
        <Link to={'/admins'} style={{ margin: '0 8px 0 0' }}>Admins</Link>
        {authButton}
      </div>
    </nav>
  )
}

function mapStateToProps (state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)
