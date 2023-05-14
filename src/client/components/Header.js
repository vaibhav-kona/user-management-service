import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  const authButton = props.auth
    ? <a href={'/api/logout'}>Logout</a>
    : <a href={'/api/auth/google'}>Login</a>

  return (
    <div>
      <Link to={'/'}> React SSR</Link>
      <div>
        <Link to={'/users'}>Users</Link>
        <Link to={'/admins'}>Admins</Link>
        {authButton}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)
