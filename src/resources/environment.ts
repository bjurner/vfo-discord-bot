import {Client} from "discord.js";

export const ENV = {
    PREFIX: "!wm",
    SECRET: process.env.secret,
    RESOURCES_PATH: "./src/resources/",

    CLIENT: new Client()
};
