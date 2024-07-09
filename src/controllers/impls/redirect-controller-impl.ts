import {Request, Response} from "express";
import {RedirectController} from "../redirect-controller";

export class RedirectControllerImpl implements RedirectController {
    public login = async (req: Request, res: Response): Promise<void> => {
    }
}