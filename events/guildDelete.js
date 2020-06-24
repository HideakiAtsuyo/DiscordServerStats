const Discord = require("discord.js");
const sql = require("sqlite");
sql.open(`./assets/${config.dbsqlite}`);
module.exports = (client, guild) => {
  sql.run(`DELETE FROM guildes WHERE guildId = ${guild.id}`);
};
