import {SlashCommandBuilder} from "discord.js";

export type Command = {
    data: SlashCommandBuilder;
    execute: (...args: any[]) => Promise<void>;
}