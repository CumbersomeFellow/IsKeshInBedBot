import type { Client } from "discord.js";

export function readyHandler(client: Client<true>): void {
 console.log(`Ready! Logged in as ${client.user.tag}`);
}