// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1185755546284986428",
        serverId: "1133667699151618130",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 50, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
];
