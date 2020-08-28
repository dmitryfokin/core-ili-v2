import * as express from 'express'
import * as dotenv from "dotenv"

dotenv.config()

import { configDB } from './db/config'
import { db, dbInit } from './db/models'
import { authMiddleware, authRouter } from './routes/auth.route'
import { apiRouter } from './routes/api.route'

const env = process.env.NODE_ENV || 'development'
const PORT = process.env.DEV_EXPRESS_PORT || 3000

const app: express.Application = express()

app.use( express.json() )

app.use( '/auth', authRouter )
app.use( authMiddleware )
app.use( '/api', apiRouter )

async function start() {
  try {
    dbInit( configDB )
    await db.sequelize.authenticate()
    console.log( 'Sequelize connection has been established successfully.' )

    app.listen( PORT, () => {
      console.log( `Server has been started on port ${PORT}...` )
    } )
  } catch {
    console.error( 'Server start error...' )
    process.exit( 1 )
  }
}

start()
