import express from "express";
import UserController from "./controllers/user.controller";

const router = express.Router();

/**
 * Get all users
 */
router.get("/", async (_req: express.Request, res: express.Response) => {
  try {
    const userController = new UserController();

    const response = await userController.getUsers();

    return res.status(response.code).send(response);
  } catch (e: any) {
    return res.status(e.code ? e.code : 500).send(e);
  }
});

/**
 * Get user by id
 */
router.get("/:id", async (_req: express.Request, res: express.Response) => {
  try {
    const userController = new UserController();

    const response = await userController.getUserById(_req.params.id);

    return res.status(response.code).send(response);
  } catch (e: any) {
    return res.status(e.code ? e.code : 500).send(e);
  }
});

export default router;
