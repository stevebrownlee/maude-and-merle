const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('database.json')

//const middlewares = jsonServer.defaults({ noCors: true })
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8088

server.use(middlewares)

/*
server.use((req, res, next) => {
  if (req.method === 'GET') {
    next()
  } else {
    res.sendStatus(401)
  }
})
*/

server.use(router)

server.listen(port, () => {
    console.log('JSON Server is running')
})
