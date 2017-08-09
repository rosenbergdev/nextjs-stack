module.exports = (app, appNext) => {
  app.get('/about/:id', (req, res) => {
    const params = { id: req.params.id }

    return appNext.render(req, res, '/about', params)
  })
}

// https://github.com/zeit/next.js/blob/master/examples/page-transitions/routes.js
