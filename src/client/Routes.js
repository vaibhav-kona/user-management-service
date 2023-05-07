import Home from './components/Home'
import Users from './components/Users'

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
    path: '/users',
    component: Users
  }
]

export default routes
