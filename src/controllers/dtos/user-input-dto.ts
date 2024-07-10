
export class UserInputDto {
    private login: string;
    private password: string;

    constructor() {
        this.login = "";
        this.password = "";
    }

    public set(login: string, password: string): this {
        this.login = login;
        this.password = password;

        return this;
    }


}