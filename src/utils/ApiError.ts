// @desc Structures data from error with more relevant data
export class ApiError extends Error {
  statusCode: number
  error: unknown
  data: Record<string, unknown>

  constructor (data: Record<string, unknown>, statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.data = data
  }
}
