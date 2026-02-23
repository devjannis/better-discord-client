/**
 * Example usage of better-discord-client
 * 
 * To run this example:
 * 1. Create a Discord bot at https://discord.com/developers/applications
 * 2. Copy your bot token
 */

import { DiscordClient, GatewayIntent } from "../src/index";

const token = process.env.BOT_TOKEN!;

const client = new DiscordClient(token, {
  intents: 
    GatewayIntent.GUILDS |
    GatewayIntent.GUILD_MESSAGES |
    GatewayIntent.DIRECT_MESSAGES |
    GatewayIntent.MESSAGE_CONTENT
});

client.on_ready((data) => {
  console.log(`Connected as ${data.user.username}#${data.user.discriminator}`);
  console.log(`User ID: ${data.user.id}`);
  console.log(`Session ID: ${data.session_id}`);
  console.log(`Guilds: ${data.guilds.length}`);
});

// Handle new messages
client.on_message((msg) => {
  console.log(` ${msg.author.username}: ${msg.content}`);
  
  // Log message details
  console.log(`ID: ${msg.id}`);
  console.log(`Channel: ${msg.channel_id}`);
  console.log(`Guild: ${msg.guild_id || "DM"}`);
  console.log(`Timestamp: ${msg.timestamp}`);
  
  if (msg.attachments.length > 0) {
    console.log(`Attachments: ${msg.attachments.length}`);
  }
  
  if (msg.embeds.length > 0) {
    console.log(`Embeds: ${msg.embeds.length}`);
  }
});

client.on_message_update((msg) => {
  console.log(`Message edited by ${msg.author.username}`);
  console.log(`New content: ${msg.content}`);
  console.log(`Edited at: ${msg.edited_timestamp}`);
});

client.on_message_delete((data) => {
  console.log(`Message deleted`);
  console.log(`Message ID: ${data.id}`);
  console.log(`Channel ID: ${data.channel_id}`);
  if (data.guild_id) {
    console.log(`Guild ID: ${data.guild_id}`);
  }
});

client.on_message_delete_bulk((data) => {
  console.log(`Bulk delete: ${data.ids.length} messages`);
  console.log(`Channel ID: ${data.channel_id}`);
});

client.on_error((error) => {
  console.error(`Error: ${error.message}`);
});

client.on_disconnect((code, reason) => {
  console.log(`Disconnected (code: ${code}, reason: ${reason})`);
  console.log("Auto-reconnecting...");
});

console.log("Connecting to Discord Gateway...");

try {
  await client.connect();
  console.log("Connection established!");
} catch (error) {
  console.error("Failed to connect:", error);
  process.exit(1);
}
