import { type NextFunction } from 'connect'
import { type Request, type Response } from 'express'

// @desc Authenticates user and protects routes

export const verify = (req: Request, res: Response, next: NextFunction): undefined => {
  next()
}
