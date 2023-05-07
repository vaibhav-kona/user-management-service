// const React = require('react')
// const { renderToString } = require('react-dom/server')
// const express = require('express')
// const Home = require('./client/components/Home.js').default

import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import Home from './client/components/Home.js'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<Home/>)

  console.log('Hello')

  const html = `
    <html lang="en">
        <head><title>User Management</title></head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
    </html>
  `

  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
