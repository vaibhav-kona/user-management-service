import Home from './client/pages/Home'
import Users from './client/pages/Users'

const routes = [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...Users,
    path: '/users'
  }
]

export default routes
