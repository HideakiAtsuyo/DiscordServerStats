const Discord = require("discord.js"),
      sql = require("sqlite");
let config = require("../assets/config.json");

sql.open(`./assets/${config.dbsqlite}`);
module.exports = (client, guild) => {
    sql.get(`SELECT * FROM guilds WHERE guildId ="${guild.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO guildes (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, channelscountchannel, adminscountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, namechannelscountchannel, nameadminscountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel, actifchannelscountchannel, actifadminscountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "Channels:", "Admins:", "yes", "yes", "yes", "yes", "yes", "yes", "yes"]);
          } 
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS guilds (guildId TEXT, prefix TEXT, botcountchannel TEXT, membercountchannel TEXT, allcountchannel TEXT, rolescountchannel TEXT, servercountchannel TEXT, channelscountchannel TEXT, adminscountchannel TEXT, countchannelstypes TEXT, namebotcountchannel TEXT, namemembercountchannel TEXT, nameallcountchannel TEXT, namerolescountchannel TEXT, nameservercountchannel TEXT, namechannelscountchannel TEXT, nameadminscountchannel TEXT, actifbotcountchannel TEXT, actifmembercountchannel TEXT, actifallcountchannel TEXT, actifrolescountchannel TEXT, actifservercountchannel TEXT, actifchannelscountchannel TEXT, actifadminscountchannel TEXT)").then(() => {
          sql.run("INSERT INTO guilds (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, channelscountchannel, adminscountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, namechannelscountchannel, nameadminscountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel, actifchannelscountchannel, actifadminscountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "Channels:", "Admins:", "yes", "yes", "yes", "yes", "yes", "yes", "yes"]);
      })
    })
};
