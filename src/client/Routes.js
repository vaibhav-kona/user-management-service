import Home from './pages/Home'
import Users, { loadData as usersLoadData } from './pages/Users'

// const Routes = () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home}/>
//       <Route exact path="/users" component={Users}/>
//     </div>
//   )
// }

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData: usersLoadData,
    path: '/users',
    component: Users
  }
]

export default routes
