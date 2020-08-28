import { Router, Request, Response, NextFunction } from 'express'

export const apiRouter = Router()

apiRouter.post( '/ping', ( req: Request, res: Response ) => {

  console.log( '/api/ping body', req.body )
  res.status( 200 ).json( req.body )
} )
