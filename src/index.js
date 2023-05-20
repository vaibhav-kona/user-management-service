import 'babel-polyfill'
import express from 'express'
import renderer from './server/renderer'
import createStore from './server/createStore'
import { matchRoutes } from 'react-router-config'
import routes from './routes'
import proxy from 'express-http-proxy'

const app = express()

app.use(express.static('public'))
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator (opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)
app.get('*', (req, res) => {
  const store = createStore(req)
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
  const wrappedPromises = promises.map((pr) => {
    if (pr) {
      return new Promise((resolve) => {
        pr.then((resolve)).catch(resolve)
      })
    }
  })
  Promise.all(wrappedPromises).then((results) => {
    const context = {}
    const rendered = renderer(req, store, context)
    const status = context.notFound ? 404 : 200
    if (context.url) {
      return res.redirect(302, context.url)
    }
    res.status(status).send(rendered)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
