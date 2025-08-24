// status can be "online", "idle", "dnd", "invisible" or "offline"
export default [
  {
    channelId: "1357815715465527467",
    serverId: "1289654556598206536",
    token: process.env.token1, // خليه في القفل
    selfDeaf: false,
    autoReconnect: {
      enabled: true,
      delay: 5, // ثواني
      maxRetries: 5
    },
    presence: {
      status: "idle"
    },
    selfMute: true
  }
];
