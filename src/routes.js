import Home from './client/pages/Home'
import Users from './client/pages/Users'
import App from './client/App'
import NotFoundPage from './client/pages/NotFoundPage'
import Admins from './client/pages/Admins'

const routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...Admins,
        path: '/admins'
      },
      {
        ...Users,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]

export default routes
