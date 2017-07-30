const session = require('express-session')
const RedisStore = require('connect-redis')(session)

module.exports = app => {
  app.use(
    session({
      store: new RedisStore({
        url: process.env.REDIS_URL,
        ttl: 100000000
      }),
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 100000000, httpOnly: false, secure: false }
    })
  )
}
