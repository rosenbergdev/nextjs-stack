module.exports = app => {
  app.post('/save-user', (req, res) => {
    console.log('save user')
    req.session.user = req.body || {}
    // req.session.save()

    res.json(req.session.user)
  })

  app.post('/logout', (req, res) => {
    req.session.destroy()
    res.json({})
  })

  app.get('/load-auth', (req, res) => {
    console.log('load auth')
    res.json((req.session && req.session.user) || {})
  })
}
