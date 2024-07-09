import {ParseHelper} from "../parse-helper";

export class StartUpParse {
    private static readonly startUpConfig: StartUpConfig = {} as StartUpConfig;

    public static getStartUpConfig(): StartUpConfig {
        this.varParse();

        return this.startUpConfig;
    }

    private static varParse(): void {

        this.startUpConfig.PORT = ParseHelper.parseNumber(process.env.PORT);

    }
}

export interface StartUpConfig {
    PORT: number;
}