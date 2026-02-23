// Discord Types

export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

export interface Member {
  user?: User;
  nick?: string | null;
  avatar?: string | null;
  roles: string[];
  joined_at: string;
  premium_since?: string | null;
  deaf: boolean;
  mute: boolean;
  flags: number;
  pending?: boolean;
  permissions?: string;
  communication_disabled_until?: string | null;
}

export interface Channel {
  id: string;
  type: number;
  guild_id?: string;
  position?: number;
  permission_overwrites?: Overwrite[];
  name?: string | null;
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: string | null;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User[];
  icon?: string | null;
  owner_id?: string;
  application_id?: string;
  managed?: boolean;
  parent_id?: string | null;
  last_pin_timestamp?: string | null;
  rtc_region?: string | null;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadata;
  member?: ThreadMember;
  default_auto_archive_duration?: number;
  permissions?: string;
  flags?: number;
  total_message_sent?: number;
  available_tags?: ForumTag[];
  applied_tags?: string[];
  default_reaction_emoji?: DefaultReaction | null;
  default_thread_rate_limit_per_user?: number;
  default_sort_order?: number | null;
  default_forum_layout?: number;
}

export interface Overwrite {
  id: string;
  type: number;
  allow: string;
  deny: string;
}

export interface ThreadMetadata {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  create_timestamp?: string | null;
}

export interface ThreadMember {
  id?: string;
  user_id?: string;
  join_timestamp: string;
  flags: number;
  member?: Member;
}

export interface ForumTag {
  id: string;
  name: string;
  moderated: boolean;
  emoji_id: string | null;
  emoji_name: string | null;
}

export interface DefaultReaction {
  emoji_id: string | null;
  emoji_name: string | null;
}

export interface Role {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string | null;
  unicode_emoji?: string | null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTags;
  flags: number;
}

export interface RoleTags {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: null;
  subscription_listing_id?: string;
  available_for_purchase?: null;
  guild_connections?: null;
}

export interface Attachment {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number | null;
  width?: number | null;
  ephemeral?: boolean;
  duration_secs?: number;
  waveform?: string;
  flags?: number;
}

export interface Embed {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}

export interface EmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedImage {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedThumbnail {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedVideo {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export interface EmbedAuthor {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface Reaction {
  count: number;
  count_details: ReactionCountDetails;
  me: boolean;
  me_burst: boolean;
  emoji: Emoji;
  burst_colors: number[];
}

export interface ReactionCountDetails {
  burst: number;
  normal: number;
}

export interface Emoji {
  id: string | null;
  name: string | null;
  roles?: string[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export interface Sticker {
  id: string;
  pack_id?: string;
  name: string;
  description: string | null;
  tags: string;
  asset?: string;
  type: number;
  format_type: number;
  available?: boolean;
  guild_id?: string;
  user?: User;
  sort_value?: number;
}

export interface StickerItem {
  id: string;
  name: string;
  format_type: number;
}

export interface Message {
  id: string;
  channel_id: string;
  author: User;
  content: string;
  timestamp: string;
  edited_timestamp: string | null;
  tts: boolean;
  mention_everyone: boolean;
  mentions: User[];
  mention_roles: string[];
  mention_channels?: ChannelMention[];
  attachments: Attachment[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: number | string;
  pinned: boolean;
  webhook_id?: string;
  type: number;
  activity?: MessageActivity;
  application?: Application;
  application_id?: string;
  message_reference?: MessageReference;
  flags?: number;
  referenced_message?: Message | null;
  interaction_metadata?: MessageInteractionMetadata;
  interaction?: MessageInteraction;
  thread?: Channel;
  components?: Component[];
  sticker_items?: StickerItem[];
  stickers?: Sticker[];
  position?: number;
  role_subscription_data?: RoleSubscriptionData;
  resolved?: ResolvedData;
  poll?: Poll;
  call?: MessageCall;
  guild_id?: string;
  member?: Member;
}

export interface ChannelMention {
  id: string;
  guild_id: string;
  type: number;
  name: string;
}

export interface MessageActivity {
  type: number;
  party_id?: string;
}

export interface Application {
  id: string;
  name: string;
  icon: string | null;
  description: string;
  rpc_origins?: string[];
  bot_public: boolean;
  bot_require_code_grant: boolean;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  owner?: User;
  summary?: string;
  verify_key: string;
  team: Team | null;
  guild_id?: string;
  guild?: Guild;
  primary_sku_id?: string;
  slug?: string;
  cover_image?: string;
  flags?: number;
  approximate_guild_count?: number;
  tags?: string[];
  install_params?: InstallParams;
  custom_install_url?: string;
  role_connections_verification_url?: string;
}

export interface Team {
  icon: string | null;
  id: string;
  members: TeamMember[];
  name: string;
  owner_user_id: string;
}

export interface TeamMember {
  membership_state: number;
  team_id: string;
  user: User;
  role: string;
}

export interface InstallParams {
  scopes: string[];
  permissions: string;
}

export interface MessageReference {
  type?: number;
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
}

export interface MessageInteractionMetadata {
  id: string;
  type: number;
  user: User;
  authorizing_integration_owners: Record<string, string>;
  original_response_message_id?: string;
  interacted_message_id?: string;
  triggering_interaction_metadata?: MessageInteractionMetadata;
}

export interface MessageInteraction {
  id: string;
  type: number;
  name: string;
  user: User;
  member?: Member;
}

export interface Component {
  type: number;
  // Union type for different component types
  // Action Row, Button, String Select, Text Input, User Select, Role Select, Mentionable Select, Channel Select
}

export interface RoleSubscriptionData {
  role_subscription_listing_id: string;
  tier_name: string;
  total_months_subscribed: number;
  is_renewal: boolean;
}

export interface ResolvedData {
  users?: Record<string, User>;
  members?: Record<string, Member>;
  roles?: Record<string, Role>;
  channels?: Record<string, Channel>;
  messages?: Record<string, Message>;
  attachments?: Record<string, Attachment>;
}

export interface Poll {
  question: PollMedia;
  answers: PollAnswer[];
  expiry: string | null;
  allow_multiselect: boolean;
  layout_type: number;
  results?: PollResults;
}

export interface PollMedia {
  text?: string;
  emoji?: Emoji;
}

export interface PollAnswer {
  answer_id: number;
  poll_media: PollMedia;
}

export interface PollResults {
  is_finalized: boolean;
  answer_counts: PollAnswerCount[];
}

export interface PollAnswerCount {
  id: number;
  count: number;
  me_voted: boolean;
}

export interface MessageCall {
  participants: string[];
  ended_timestamp?: string | null;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  icon_hash?: string | null;
  splash: string | null;
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: string;
  permissions?: string;
  region?: string | null;
  afk_channel_id: string | null;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: string | null;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: Role[];
  emojis: Emoji[];
  features: string[];
  mfa_level: number;
  application_id: string | null;
  system_channel_id: string | null;
  system_channel_flags: number;
  rules_channel_id: string | null;
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: string | null;
  max_video_channel_users?: number;
  max_stage_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreen;
  nsfw_level: number;
  stickers?: Sticker[];
  premium_progress_bar_enabled: boolean;
  safety_alerts_channel_id: string | null;
  incidents_data?: IncidentsData;
}

export interface WelcomeScreen {
  description: string | null;
  welcome_channels: WelcomeScreenChannel[];
}

export interface WelcomeScreenChannel {
  channel_id: string;
  description: string;
  emoji_id: string | null;
  emoji_name: string | null;
}

export interface IncidentsData {
  incidents_invites_disabled_until: string | null;
  dms_disabled_until: string | null;
  dm_spam_detected_at: string | null;
  raid_detected_at: string | null;
}

export interface ReadyData {
  v: number;
  user: User;
  guilds: UnavailableGuild[];
  session_id: string;
  resume_gateway_url: string;
  shard?: [number, number];
  application: Application;
}

export interface UnavailableGuild {
  id: string;
  unavailable: boolean;
}

export interface MessageDelete {
  id: string;
  channel_id: string;
  guild_id?: string;
}

export interface MessageDeleteBulk {
  ids: string[];
  channel_id: string;
  guild_id?: string;
}

// Gateway event payload types
export type GatewayEvent =
  | { t: 'READY'; d: ReadyData }
  | { t: 'MESSAGE_CREATE'; d: Message }
  | { t: 'MESSAGE_UPDATE'; d: Message }
  | { t: 'MESSAGE_DELETE'; d: MessageDelete }
  | { t: 'MESSAGE_DELETE_BULK'; d: MessageDeleteBulk }
  | { t: string; d: unknown };
