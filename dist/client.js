import { GatewayManager } from './gateway';
import { GatewayIntent, DEFAULT_INTENTS } from './constants';
export { GatewayIntent, GatewayOpcode, GatewayCloseCode } from './constants';
/**
 * A Discord Gateway client focused on message handling.
 *
 * Features:
 * - Automatic reconnection with exponential backoff
 * - Session resume support for missed events
 * - Full TypeScript types for all Discord Gateway events
 * - Rate limiting protection
 * - Raw Discord payload format
 *
 * @example
 * ```typescript
 * const client = new DiscordClient('YOUR_TOKEN');
 *
 * client.on_ready((data) => {
 *   console.log(`Connected as ${data.user.username}`);
 * });
 *
 * client.on_message((msg) => {
 *   console.log(`${msg.author.username}: ${msg.content}`);
 * });
 *
 * await client.connect();
 * ```
 */
export class DiscordClient {
    gateway;
    /**
     * Creates a new Discord client instance.
     *
     * @param token - Your Discord token
     * @param options - Optional configuration
     */
    constructor(token, options = {}) {
        const intents = options.intents ?? DEFAULT_INTENTS;
        this.gateway = new GatewayManager(token, intents);
    }
    /**
     * Register a handler for the ready event.
     * Called when the client successfully connects and receives the READY payload.
     *
     * @param handler - Function to call when ready
     */
    on_ready(handler) {
        this.gateway.onReady(handler);
    }
    /**
     * Register a handler for new messages.
     * Called when a MESSAGE_CREATE event is received.
     *
     * @param handler - Function to call with the message
     */
    on_message(handler) {
        this.gateway.onMessage(handler);
    }
    /**
     * Register a handler for updated messages.
     * Called when a MESSAGE_UPDATE event is received.
     *
     * @param handler - Function to call with the updated message
     */
    on_message_update(handler) {
        this.gateway.onMessageUpdate(handler);
    }
    /**
     * Register a handler for deleted messages.
     * Called when a MESSAGE_DELETE event is received.
     *
     * @param handler - Function to call with delete data
     */
    on_message_delete(handler) {
        this.gateway.onMessageDelete(handler);
    }
    /**
     * Register a handler for bulk deleted messages.
     * Called when a MESSAGE_DELETE_BULK event is received.
     *
     * @param handler - Function to call with bulk delete data
     */
    on_message_delete_bulk(handler) {
        this.gateway.onMessageDeleteBulk(handler);
    }
    /**
     * Register a handler for errors.
     * Called when an error occurs in the gateway connection.
     *
     * @param handler - Function to call with the error
     */
    on_error(handler) {
        this.gateway.onError(handler);
    }
    /**
     * Register a handler for disconnect events.
     * Called when the gateway connection closes.
     *
     * @param handler - Function to call with close code and reason
     */
    on_disconnect(handler) {
        this.gateway.onDisconnect(handler);
    }
    /**
     * Connect to the Discord Gateway.
     * Automatically handles reconnection on disconnect.
     *
     * @returns Promise that resolves when the connection is established
     * @throws Error if the connection fails initially
     */
    connect() {
        return this.gateway.connect();
    }
    /**
     * Disconnect from the Discord Gateway.
     * Cleanly closes the connection without attempting to reconnect.
     */
    disconnect() {
        this.gateway.disconnect();
    }
    /**
     * Check if the client is currently connected.
     *
     * @returns true if connected and websocket is open
     */
    is_connected() {
        return this.gateway.isConnected();
    }
    /**
     * Get the current session ID.
     * Useful for debugging connection issues.
     *
     * @returns The session ID or null if not connected
     */
    get_session_id() {
        return this.gateway.getSessionId();
    }
    /**
     * Get the current sequence number.
     * Useful for debugging and tracking event order.
     *
     * @returns The sequence number or null if not connected
     */
    get_sequence_number() {
        return this.gateway.getSequenceNumber();
    }
}
// Re-export constants for convenience
export { DEFAULT_INTENTS };
