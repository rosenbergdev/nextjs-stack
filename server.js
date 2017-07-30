const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const Redis = require('./services/redis')
const Auth = require('./services/auth')
const Routes = require('./services/routes')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(compression())

  Redis(server)
  Auth(server)
  Routes(server, app)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
