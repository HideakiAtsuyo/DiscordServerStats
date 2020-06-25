const Discord = require("discord.js");
const sql = require("sqlite");
const config = require("../assets/config.json");
sql.open(`./assets/${config.dbsqlite}`);
exports.run = (client, message, args) => {

     if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have permission: __**MANAGE_GUILD**__");
     if(!args[0]) return message.reply("specify a setting to modify!");
     const settingtochange = args[0];
     
}
