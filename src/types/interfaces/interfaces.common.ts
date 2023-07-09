// Interface for custom class ApiError
export interface ApiError extends Error {
  success: boolean
  message: string
  statusCode: number
  data: Record<string, unknown>
}

// Example User interface
export interface User {
  name: string
}

export interface HealthResponse {
  status: string
  message: string
}
