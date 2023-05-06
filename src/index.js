const React = require('react')
const {renderToString} = require('react-dom/server')
const Home = require('./client/components/Home.js')

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const content = renderToString(<Home/>)
  res.send(content)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
