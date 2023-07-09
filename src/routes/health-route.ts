import express from "express";

// Import controllers from
import { getHealthStatus } from "@/controllers/health-controller";

// Setup router
const router = express.Router();

// Setup health route
router.get("/",getHealthStatus);

// Export router; should always export as default
export default router;