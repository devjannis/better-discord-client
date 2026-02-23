# better-discord-client

A lightweight Discord Gateway client focused on message handling.

## Installation

```bash
bun install better-discord-client
```

## Quick Start

```typescript
import { DiscordClient } from "better-discord-client";

const client = new DiscordClient("YOUR_BOT_TOKEN");

client.on_ready((data) => {
  console.log(`Connected as ${data.user.username}`);
});

client.on_message((msg) => {
  console.log(`${msg.author.username}: ${msg.content}`);
});

await client.connect();
```

## API

### Constructor

```typescript
new DiscordClient(token: string, options?: DiscordClientOptions)
```

### Options

```typescript
interface DiscordClientOptions {
  intents?: number; // Gateway intents (defaults to GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, MESSAGE_CONTENT)
}
```

### Event Handlers

All handlers receive raw Discord payloads:

```typescript
client.on_ready((data: ReadyData) => {});
client.on_message((message: Message) => {});
client.on_message_update((message: Message) => {});
client.on_message_delete((data: MessageDelete) => {});
client.on_message_delete_bulk((data: MessageDeleteBulk) => {});
client.on_error((error: Error) => {});
client.on_disconnect((code: number, reason: string) => {});
```

### Methods

```typescript
await client.connect();      // Connect to Discord Gateway
client.disconnect();         // Clean disconnect
client.is_connected();       // Check connection status
client.get_session_id();     // Get current session ID
client.get_sequence_number(); // Get current sequence number
```

## License

MIT
