import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "@/middleware/async-middleware";
import { HealthResponse, User } from "@/types/interfaces/interfaces.common";

// @desc     Gets all users from database
// @route    /users
// @method   GET

// ? asyncHandler should be used for every request for easy async handling
export const getHealthStatus = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    const healthResponse : HealthResponse = {status: 'UP', message: 'Service is working'};

    // Return json with success message
    res.status(200).json(healthResponse);
  },
);
