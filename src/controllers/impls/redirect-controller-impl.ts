import {Request, Response} from "express";
import {RedirectController} from "../redirect-controller";
import {UserInputDto} from "../dtos/user-input-dto";
import {ErrorHandler} from "../../utils/error-handler";
import {RedirectService} from "../../services/redirect-service";
import {UserOutputDto} from "../dtos/user-output-dto";

export class RedirectControllerImpl implements RedirectController {
    private readonly redirectService: RedirectService;

    constructor(redirectService: RedirectService) {
        this.redirectService = redirectService;
    }

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: UserInputDto = this.getInputDto(req);

            const output: UserOutputDto = await this.redirectService
                .login(input);

            this.setResponse(res, output);

        } catch (err: any) {
            ErrorHandler.setError(res, err, 500);
        }
    }

    private getInputDto(req: Request): UserInputDto {
        try {
            const body: UserInput = req.body;
            const dto: UserInputDto = new UserInputDto()
                .set(body.login, body.password);

            return dto;
        } catch (err: any) {
            ErrorHandler.throwError(err, "Error occurred while parsing request body");
        }

        return new UserInputDto();
    }

    private setResponse(res: Response, output: UserOutputDto): void {

    }
}

interface UserInput {
    login: string;
    password: string;
}
