// Discord Gateway Constants
export const GATEWAY_URL = 'wss://gateway.discord.gg';
export const GATEWAY_VERSION = 10;
export const API_VERSION = 10;
// Gateway Opcodes
export var GatewayOpcode;
(function (GatewayOpcode) {
    GatewayOpcode[GatewayOpcode["DISPATCH"] = 0] = "DISPATCH";
    GatewayOpcode[GatewayOpcode["HEARTBEAT"] = 1] = "HEARTBEAT";
    GatewayOpcode[GatewayOpcode["IDENTIFY"] = 2] = "IDENTIFY";
    GatewayOpcode[GatewayOpcode["PRESENCE_UPDATE"] = 3] = "PRESENCE_UPDATE";
    GatewayOpcode[GatewayOpcode["VOICE_STATE_UPDATE"] = 4] = "VOICE_STATE_UPDATE";
    GatewayOpcode[GatewayOpcode["RESUME"] = 6] = "RESUME";
    GatewayOpcode[GatewayOpcode["RECONNECT"] = 7] = "RECONNECT";
    GatewayOpcode[GatewayOpcode["REQUEST_GUILD_MEMBERS"] = 8] = "REQUEST_GUILD_MEMBERS";
    GatewayOpcode[GatewayOpcode["INVALID_SESSION"] = 9] = "INVALID_SESSION";
    GatewayOpcode[GatewayOpcode["HELLO"] = 10] = "HELLO";
    GatewayOpcode[GatewayOpcode["HEARTBEAT_ACK"] = 11] = "HEARTBEAT_ACK";
})(GatewayOpcode || (GatewayOpcode = {}));
// Gateway Close Event Codes
export var GatewayCloseCode;
(function (GatewayCloseCode) {
    GatewayCloseCode[GatewayCloseCode["UNKNOWN_ERROR"] = 4000] = "UNKNOWN_ERROR";
    GatewayCloseCode[GatewayCloseCode["UNKNOWN_OPCODE"] = 4001] = "UNKNOWN_OPCODE";
    GatewayCloseCode[GatewayCloseCode["DECODE_ERROR"] = 4002] = "DECODE_ERROR";
    GatewayCloseCode[GatewayCloseCode["NOT_AUTHENTICATED"] = 4003] = "NOT_AUTHENTICATED";
    GatewayCloseCode[GatewayCloseCode["AUTHENTICATION_FAILED"] = 4004] = "AUTHENTICATION_FAILED";
    GatewayCloseCode[GatewayCloseCode["ALREADY_AUTHENTICATED"] = 4005] = "ALREADY_AUTHENTICATED";
    GatewayCloseCode[GatewayCloseCode["INVALID_SEQ"] = 4007] = "INVALID_SEQ";
    GatewayCloseCode[GatewayCloseCode["RATE_LIMITED"] = 4008] = "RATE_LIMITED";
    GatewayCloseCode[GatewayCloseCode["SESSION_TIMED_OUT"] = 4009] = "SESSION_TIMED_OUT";
    GatewayCloseCode[GatewayCloseCode["INVALID_SHARD"] = 4010] = "INVALID_SHARD";
    GatewayCloseCode[GatewayCloseCode["SHARDING_REQUIRED"] = 4011] = "SHARDING_REQUIRED";
    GatewayCloseCode[GatewayCloseCode["INVALID_API_VERSION"] = 4012] = "INVALID_API_VERSION";
    GatewayCloseCode[GatewayCloseCode["INVALID_INTENTS"] = 4013] = "INVALID_INTENTS";
    GatewayCloseCode[GatewayCloseCode["DISALLOWED_INTENTS"] = 4014] = "DISALLOWED_INTENTS";
})(GatewayCloseCode || (GatewayCloseCode = {}));
// Gateway Intents
export var GatewayIntent;
(function (GatewayIntent) {
    GatewayIntent[GatewayIntent["GUILDS"] = 1] = "GUILDS";
    GatewayIntent[GatewayIntent["GUILD_MEMBERS"] = 2] = "GUILD_MEMBERS";
    GatewayIntent[GatewayIntent["GUILD_MODERATION"] = 4] = "GUILD_MODERATION";
    GatewayIntent[GatewayIntent["GUILD_EMOJIS_AND_STICKERS"] = 8] = "GUILD_EMOJIS_AND_STICKERS";
    GatewayIntent[GatewayIntent["GUILD_INTEGRATIONS"] = 16] = "GUILD_INTEGRATIONS";
    GatewayIntent[GatewayIntent["GUILD_WEBHOOKS"] = 32] = "GUILD_WEBHOOKS";
    GatewayIntent[GatewayIntent["GUILD_INVITES"] = 64] = "GUILD_INVITES";
    GatewayIntent[GatewayIntent["GUILD_VOICE_STATES"] = 128] = "GUILD_VOICE_STATES";
    GatewayIntent[GatewayIntent["GUILD_PRESENCES"] = 256] = "GUILD_PRESENCES";
    GatewayIntent[GatewayIntent["GUILD_MESSAGES"] = 512] = "GUILD_MESSAGES";
    GatewayIntent[GatewayIntent["GUILD_MESSAGE_REACTIONS"] = 1024] = "GUILD_MESSAGE_REACTIONS";
    GatewayIntent[GatewayIntent["GUILD_MESSAGE_TYPING"] = 2048] = "GUILD_MESSAGE_TYPING";
    GatewayIntent[GatewayIntent["DIRECT_MESSAGES"] = 4096] = "DIRECT_MESSAGES";
    GatewayIntent[GatewayIntent["DIRECT_MESSAGE_REACTIONS"] = 8192] = "DIRECT_MESSAGE_REACTIONS";
    GatewayIntent[GatewayIntent["DIRECT_MESSAGE_TYPING"] = 16384] = "DIRECT_MESSAGE_TYPING";
    GatewayIntent[GatewayIntent["MESSAGE_CONTENT"] = 32768] = "MESSAGE_CONTENT";
    GatewayIntent[GatewayIntent["GUILD_SCHEDULED_EVENTS"] = 65536] = "GUILD_SCHEDULED_EVENTS";
    GatewayIntent[GatewayIntent["AUTO_MODERATION_CONFIGURATION"] = 1048576] = "AUTO_MODERATION_CONFIGURATION";
    GatewayIntent[GatewayIntent["AUTO_MODERATION_EXECUTION"] = 2097152] = "AUTO_MODERATION_EXECUTION";
    GatewayIntent[GatewayIntent["GUILD_MESSAGE_POLLS"] = 16777216] = "GUILD_MESSAGE_POLLS";
    GatewayIntent[GatewayIntent["DIRECT_MESSAGE_POLLS"] = 33554432] = "DIRECT_MESSAGE_POLLS";
})(GatewayIntent || (GatewayIntent = {}));
// Default intents for message handling
export const DEFAULT_INTENTS = GatewayIntent.GUILDS |
    GatewayIntent.GUILD_MESSAGES |
    GatewayIntent.DIRECT_MESSAGES |
    GatewayIntent.MESSAGE_CONTENT;
// Reconnection constants
export const INITIAL_RECONNECT_DELAY = 1000; // 1 second
export const MAX_RECONNECT_DELAY = 60000; // 60 seconds
export const MAX_RECONNECT_JITTER = 0.2; // 20% jitter
export const RESUME_TIMEOUT = 120000; // 2 minutes (Discord's max)
export const HEARTBEAT_TIMEOUT = 5000; // 5 seconds
export const IDENTIFY_RATE_LIMIT = 5000; // Max 5 IDENTIFY per 5 seconds
export const MAX_IDENTIFIES_PER_WINDOW = 5;
// Message types (from Discord API)
export var MessageType;
(function (MessageType) {
    MessageType[MessageType["DEFAULT"] = 0] = "DEFAULT";
    MessageType[MessageType["RECIPIENT_ADD"] = 1] = "RECIPIENT_ADD";
    MessageType[MessageType["RECIPIENT_REMOVE"] = 2] = "RECIPIENT_REMOVE";
    MessageType[MessageType["CALL"] = 3] = "CALL";
    MessageType[MessageType["CHANNEL_NAME_CHANGE"] = 4] = "CHANNEL_NAME_CHANGE";
    MessageType[MessageType["CHANNEL_ICON_CHANGE"] = 5] = "CHANNEL_ICON_CHANGE";
    MessageType[MessageType["CHANNEL_PINNED_MESSAGE"] = 6] = "CHANNEL_PINNED_MESSAGE";
    MessageType[MessageType["USER_JOIN"] = 7] = "USER_JOIN";
    MessageType[MessageType["GUILD_BOOST"] = 8] = "GUILD_BOOST";
    MessageType[MessageType["GUILD_BOOST_TIER_1"] = 9] = "GUILD_BOOST_TIER_1";
    MessageType[MessageType["GUILD_BOOST_TIER_2"] = 10] = "GUILD_BOOST_TIER_2";
    MessageType[MessageType["GUILD_BOOST_TIER_3"] = 11] = "GUILD_BOOST_TIER_3";
    MessageType[MessageType["CHANNEL_FOLLOW_ADD"] = 12] = "CHANNEL_FOLLOW_ADD";
    MessageType[MessageType["GUILD_DISCOVERY_DISQUALIFIED"] = 14] = "GUILD_DISCOVERY_DISQUALIFIED";
    MessageType[MessageType["GUILD_DISCOVERY_REQUALIFIED"] = 15] = "GUILD_DISCOVERY_REQUALIFIED";
    MessageType[MessageType["GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING"] = 16] = "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING";
    MessageType[MessageType["GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING"] = 17] = "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING";
    MessageType[MessageType["THREAD_CREATED"] = 18] = "THREAD_CREATED";
    MessageType[MessageType["REPLY"] = 19] = "REPLY";
    MessageType[MessageType["CHAT_INPUT_COMMAND"] = 20] = "CHAT_INPUT_COMMAND";
    MessageType[MessageType["THREAD_STARTER_MESSAGE"] = 21] = "THREAD_STARTER_MESSAGE";
    MessageType[MessageType["GUILD_INVITE_REMINDER"] = 22] = "GUILD_INVITE_REMINDER";
    MessageType[MessageType["CONTEXT_MENU_COMMAND"] = 23] = "CONTEXT_MENU_COMMAND";
    MessageType[MessageType["AUTO_MODERATION_ACTION"] = 24] = "AUTO_MODERATION_ACTION";
    MessageType[MessageType["ROLE_SUBSCRIPTION_PURCHASE"] = 25] = "ROLE_SUBSCRIPTION_PURCHASE";
    MessageType[MessageType["INTERACTION_PREMIUM_UPSELL"] = 26] = "INTERACTION_PREMIUM_UPSELL";
    MessageType[MessageType["STAGE_START"] = 27] = "STAGE_START";
    MessageType[MessageType["STAGE_END"] = 28] = "STAGE_END";
    MessageType[MessageType["STAGE_SPEAKER"] = 29] = "STAGE_SPEAKER";
    MessageType[MessageType["STAGE_TOPIC"] = 31] = "STAGE_TOPIC";
    MessageType[MessageType["GUILD_APPLICATION_PREMIUM_SUBSCRIPTION"] = 32] = "GUILD_APPLICATION_PREMIUM_SUBSCRIPTION";
    MessageType[MessageType["GUILD_INCIDENT_ALERT_MODE_ENABLED"] = 36] = "GUILD_INCIDENT_ALERT_MODE_ENABLED";
    MessageType[MessageType["GUILD_INCIDENT_ALERT_MODE_DISABLED"] = 37] = "GUILD_INCIDENT_ALERT_MODE_DISABLED";
    MessageType[MessageType["GUILD_INCIDENT_REPORT_RAID"] = 38] = "GUILD_INCIDENT_REPORT_RAID";
    MessageType[MessageType["GUILD_INCIDENT_REPORT_FALSE_ALARM"] = 39] = "GUILD_INCIDENT_REPORT_FALSE_ALARM";
    MessageType[MessageType["PURCHASE_NOTIFICATION"] = 44] = "PURCHASE_NOTIFICATION";
    MessageType[MessageType["POLL_RESULT"] = 46] = "POLL_RESULT";
})(MessageType || (MessageType = {}));
