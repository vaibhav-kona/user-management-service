import Home from './client/pages/Home'
import Users from './client/pages/Users'
import App from './client/App'

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
        ...Users,
        path: '/users'
      }
    ]
  }
]

export default routes
