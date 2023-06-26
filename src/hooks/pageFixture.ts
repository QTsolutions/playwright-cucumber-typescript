import { Page } from "@playwright/test";
import { Logger } from "winston";

export const fixture = {
    //for not getting any compile time error
    //@ts-ignore     
    page: undefined as Page,
    logger: undefined as Logger
}