import {Client} from "discord.js";

export const ENV = {
    PREFIX: "!wm",
    TOKEN: process.env.token,
    RESOURCES_PATH: "./src/resources/",

    CLIENT: new Client()
};
