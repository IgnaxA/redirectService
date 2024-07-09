import {RedirectController} from "../controllers/redirect-controller";
import express, {Router} from "express";

export class RedirectRouter {
    private readonly redirectRouter: Router;
    private readonly redirectController: RedirectController;

    constructor(redirectController: RedirectController) {
        this.redirectRouter = express.Router();
        this.redirectController = redirectController;
    }

    public setRouter(): Router {
        this.redirectRouter.post("/login", this.redirectController.login);

        return this.redirectRouter;
    }
}