import {UserInputDto} from "../controllers/dtos/user-input-dto";
import {UserOutputDto} from "../controllers/dtos/user-output-dto";


export interface RedirectService {
    login(input: UserInputDto): Promise<UserOutputDto>;
}