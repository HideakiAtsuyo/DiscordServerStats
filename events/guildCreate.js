const Discord = require("discord.js"),
      sql = require("sqlite");
let config = require("../assets/config.json");

sql.open(`./assets/${config.dbsqlite}`);
module.exports = (client, guild) => {
    sql.get(`SELECT * FROM guildes WHERE guildId ="${guild.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO guildes (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, channelscountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, namechannelscountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel, actifchannelscountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "Channels:", "yes", "yes", "yes", "yes", "yes", "yes"]);
          } 
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS guildes (guildId TEXT, prefix TEXT, botcountchannel TEXT, membercountchannel TEXT, allcountchannel TEXT, rolescountchannel TEXT, servercountchannel TEXT, channelscountchannel TEXT, countchannelstypes TEXT, namebotcountchannel TEXT, namemembercountchannel TEXT, nameallcountchannel TEXT, namerolescountchannel TEXT, nameservercountchannel TEXT, namechannelscountchannel TEXT, actifbotcountchannel TEXT, actifmembercountchannel TEXT, actifallcountchannel TEXT, actifrolescountchannel TEXT, actifservercountchannel TEXT, actifchannelscountchannel TEXT)").then(() => {
          sql.run("INSERT INTO guildes (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, channelscountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, namechannelscountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel, actifchannelscountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "Channels:", "yes", "yes", "yes", "yes", "yes", "yes"]);
      })
    })
};
