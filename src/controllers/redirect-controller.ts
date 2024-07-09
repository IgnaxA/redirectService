import {Request, Response} from "express";

export interface RedirectController {
    login(req: Request, res: Response): Promise<void>;
}