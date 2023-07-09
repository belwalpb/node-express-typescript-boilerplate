import { type ApiError } from '@/types/interfaces/interfaces.common'
import { type Request, type Response, type NextFunction } from 'express'

// @desc Handles error responses from throw errors

export const errorResponse = (error: ApiError, _req: Request, res: Response, _next: NextFunction): undefined => {
  res.status(error.statusCode).json({
    success: false,
    data: error.data,
    message: error.message
  })
}
