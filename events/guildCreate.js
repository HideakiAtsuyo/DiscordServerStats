const Discord = require("discord.js");
const bot = new Discord.Client();
const sql = require("sqlite");
const config = require("../assets/config.json");
sql.open(`./assets/${config.dbsqlite}`);
module.exports = (client, guild) => {
    sql.get(`SELECT * FROM guildes WHERE guildId ="${guild.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO guildes (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "yes", "yes", "yes", "yes", "yes"]);
          } 
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS guildes (guildId TEXT, prefix TEXT, botcountchannel TEXT, membercountchannel TEXT, allcountchannel TEXT, rolescountchannel TEXT, servercountchannel TEXT, countchannelstypes TEXT, namebotcountchannel TEXT, namemembercountchannel TEXT, nameallcountchannel TEXT, namerolescountchannel TEXT, nameservercountchannel TEXT, actifbotcountchannel TEXT, actifmembercountchannel TEXT, actifallcountchannel TEXT, actifrolescountchannel TEXT, actifservercountchannel TEXT)").then(() => {
          sql.run("INSERT INTO guildes (guildId, prefix, botcountchannel, membercountchannel, allcountchannel, rolescountchannel, servercountchannel, countchannelstypes, namebotcountchannel, namemembercountchannel, nameallcountchannel, namerolescountchannel, nameservercountchannel, actifbotcountchannel, actifmembercountchannel, actifallcountchannel, actifrolescountchannel, actifservercountchannel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, config.prefix, "none", "none", "none","none", "none", "voice", "Bots:", "Members:", "All:","Roles:", "Servers:", "yes", "yes", "yes", "yes", "yes"]);
      })
    })
};
