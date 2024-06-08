const Hapi = require('@hapi/hapi')
const { routeAPI } = require('./route/route')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
          cors: {
            origin: ['*']
          }
        }
      })

      server.route(routeAPI)

      await server.start()
    
      console.log(`Server berjalan pada ${server.info.uri}`)
}

init()