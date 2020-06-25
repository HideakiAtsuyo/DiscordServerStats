const Discord = require("discord.js");
const bot = new Discord.Client();
const sql = require("sqlite");
const config = require("../assets/config.json");
sql.open(`./assets/${config.dbsqlite}`);
exports.run = (client, message, args) => {

     if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have permission: __**MANAGE_GUILD**__");
     const newprefix = args[0]
     const newprefixfix = newprefix.replace(/[^\x00-\x7F]/g, "");
     if (newprefix.length < 1) return message.reply("you didn't provide a new prefix to be defined")
     if (newprefixfix.length < 1) return message.reply("the prefix cannot contain ascii characters")
     if (newprefix.length > 7) return message.reply("the prefix may not exceed 7 characters")
     sql.get(`SELECT * FROM guildes WHERE guildId ="${message.guild.id}"`).then(row => {
     sql.run(`UPDATE guildes SET prefix = "${newprefixfix}", casenumber = ${row.casenumber + 1} WHERE guildId = ${message.guild.id}`);
     message.reply("I set the new guild prefix to " + "`" + `${newprefix}` + "`")
    })
}
