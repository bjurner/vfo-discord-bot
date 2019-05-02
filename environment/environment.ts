import {Client} from "discord.js";
require('dotenv').config();

export const ENV = {
    PREFIX: "!wm",
    SECRET: process.env.secret,
    RESOURCES_PATH: "./resources/",
    CLIENT: new Client()
};
