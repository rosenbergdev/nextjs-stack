module.exports = app => {
  app.post('/save-user', (req, res) => {
    req.session.user = req.body || {}
    req.session.save(
      req.session.save(() => {
        console.log('session saved')
      })
    )
    console.log('req.session.user', req.session.user)

    res.json(req.session.user)
  })

  app.get('/load-auth', (req, res) => {
    console.log('load', req.session)
    res.json((req.session && req.session.user) || {})
  })
}
