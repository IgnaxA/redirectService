import {Pool} from "pg";

export interface Driver {
    getDriver(): Pool;
}