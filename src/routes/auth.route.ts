import { Router, Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcryptjs'
import { db } from '../db/models'
import { IUserType } from '../db/models/user'
import * as jwt from 'jsonwebtoken'

export const authRouter = Router()

export type TokenPayloadType = {
  userId: string
  name: string
  email: string
  iat?: number
  exp?: Date
}

const getToken = async ( user: IUserType )
  : Promise<{ token: string }> => {
  const token: string = await jwt.sign( {
      userId: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    } )

  return {token}
}

authRouter.post( '/signup',
  async ( req: Request, res: Response ) => {
    try {
      const {email, password, name} = req.body

      // TODO: валидация данных

      const candidate = await db.User.findOne( {where: {email}} ) as IUserType
      if ( candidate ) {
        return res.status( 400 )
          .json( {message: 'Such user is already exist'} )
      }

      await db.User.create( {
        email: email,
        name: name,
        paramsJSONB: {
          password: await bcrypt.hash( password, 12 )
        }
      } )

      return res.status( 200 )
        .json( {message: 'User was created successfully'} )
    } catch ( e ) {
      res.status( 403 )
        .json( {message: `Credentials are not valid: ${e.message}`} )
    }

  } )

authRouter.post( '/signin',
  async ( req: Request, res: Response ) => {
    try {
      const {email, password} = req.body

      // TODO: валидация данных

      const user = await db.User.findOne( {where: {email}} ) as IUserType

      if ( !user ) {
        return res.status( 403 )
          .json( {message: `Password or email is not valid`} )
      }

      if ( !await bcrypt.compare( password, user.paramsJSONB.password ) ) {
        return res.status( 403 )
          .json( {message: `Password or email is not valid`} )
      }

      res.json( await getToken( user ) )
    } catch ( e ) {
      res.status( 403 )
        .json( {message: `Credentials are not valid: ${e.message}`} )
    }
  } )

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ( req.method === 'OPTIONS' ) {
    next()
  }

  try {
    if ( !req.headers.authorization ) {
      return res.status( 401 )
        .json( {message: `You are not authorized!`} )
    }

    const token = req.headers.authorization.split( ' ' )[1]
    req.body.tokenPayload =
      jwt.verify( token, process.env.JWT_SECRET ) as TokenPayloadType

    next()
  } catch ( e ) {
    return res.status( 401 )
      .json( {message: `You are not authorized!`} )
  }
}
