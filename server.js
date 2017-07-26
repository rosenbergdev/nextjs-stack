const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/about/:id', (req, res) => {
    const params = { id: req.params.id }

    return app.render(req, res, '/about', params)
  })

  server.get('/loadAuth', (req, res) => {
    console.log('loading auth')

    res.json(
      (req.session && req.session.user) || {
        id: 'dsads'
      }
    )
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
