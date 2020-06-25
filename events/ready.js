const Discord = require("discord.js"),
bot = new Discord.Client({disableEveryone: true}),
fs = require("fs"),
chalk = require("chalk");

let config = require("../assets/config.json");

module.exports = (client, guild, files, message) => {
var now = new Date(),
hours = now.getHours(),
minuts = now.getMinutes(),
seconds = now.getSeconds(),
times = (chalk.red(`[`) + chalk.blue(`${heures}${chalk.red(":")}${minutes}${chalk.red(":")}${secondes}`) + chalk.red(`]/`));

console.log(times + `\x1b[36m%s\x1b[0m`, '[INFO]', '\x1b[0m' + chalk.red("Logged in as: ") + chalk.blue(client.user.username) + chalk.red("#") + chalk.blue(client.user.discriminator) + chalk.red(" - (") + chalk.blue(client.user.id) + chalk.red(")"));
console.log(times + chalk.red("Nombre de guildes: ") + chalk.blue(client.guilds.size));
if(client.shard){
  console.log(chalk.red("Sharding: ") + chalk.blue("Yes"));
  console.log(chalk.red("Number of Shards: ") + chalk.red(client.shard.count));
} else {
  console.log(chalk.red("Sharding: ") + chalk.blue("No"));
}
/*client.guilds.map(r =>{
console.log(chalk.red("Name: ") + chalk.blue(r.name) + ` | ` + chalk.red(`Members: `) + chalk.blue(`${r.memberCount}`) + ` | ` + chalk.red(`ID: `) + chalk.blue(`${r.id}`));
});
I don't know if this is really needed :)
*/

fs.readdir("./commands/", async (err, files) => {
  const filez = files.length;
  if (err) return console.error(err);
  console.log(`${filez} commands loaded!`);
});
client.setInterval(() => {
  var activities = [
  {
    "text": "Creator: Hideaki#0136",
    "type": "WATCHING"
  },
  {
    "text": "PREFIX: s>",
    "type": "WATCHING"
  }
  ];
  const activity = activities[Math.floor(Math.random() * activities.length)];
  client.user.setActivity(activity.text, { type: activity.type });
}, 3600000);
}
