import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return ` 
    <html lang="en">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <head><title>User Management</title></head>
      <body>
        <div id="root">${content}</div>
         <script>
            window.INITIAL_STATE = ${JSON.stringify(serialize(store.getState()))} 
         </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
