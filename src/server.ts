import * as express from 'express'

const app: express.Application = express()

const PORT: number = 3000


app.get( '/', ( request: express.Request, response: express.Response ): void => {
  response.send( 'Hello world!!!' )
} )


async function start() {
  try {
    app.listen( PORT, () => {
      console.log( `Server has been started on port ${PORT}...` )
    } )
  } catch {
    console.error( 'Server start error...' )
    process.exit( 1 )
  }
}

start()