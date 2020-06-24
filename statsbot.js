//////////////////Discord.js//////////////////
const Discord = require("discord.js"),
client = new Discord.Client({disableEveryone: true});
//////////////////Discord.js//////////////////
//////////////////////////////////////////////

//////////////////Others//////////////////
const chalk = require("chalk"),
fs = require("fs"),
sql = require("sqlite");
//////////////////Others//////////////////
//////////////////////////////////////////

////////////////////Config////////////////////
let config = require('./assets/config.json');
sql.open(`./assets/${config.dbsqlite}`);
client.setMaxListeners(Number.POSITIVE_INFINITY)
////////////////////Config////////////////////
//////////////////////////////////////////////

////////////////////Discord Collections + events////////////////////
client.commands = new Discord.Collection();
fs.readdir('./events/', (err, files) => {
  files = files.filter(f => f.endsWith('.js'));
  files.forEach(fe => {
      const event = require(`./events/${fe}`);
      client.on(fe.split('.')[0], event.bind(null, client));
      delete require.cache[require.resolve(`./events/${fe}`)];
  });
});

client.on('message', message => {
	sql.get(`SELECT * FROM guildes WHERE guildId ="${message.guild.id}"`).then(row => {
		if (message.content.startsWith("<@" + client.user.id +">") || message.content.startsWith("<@!" + client.user.id +">")) {
			message.reply(`Prefix: \`${row.prefix}\``);
		}
	});
});

////////////////////Discord Collections + events////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////SHARD EVENTS////////////////////////////////////////
client.on('shardDisconnected', (event,shardID) => {
    console.log(chalk.red('----- [')+chalk.blue(shardID)+chalk.red('] Disconnected -----'));
    client.destroy().then(client.login(config.token));

});
client.on('shardReconnecting', (id) => {
    console.log(chalk.red('[') + chalk.blue(id) + chalk.red(`]--------------- `) + chalk.blue(`${client.user.username}`) + chalk.red(`Reconnecting... ---------------`));
});
client.on('shardResumed', function(replayed,shardID) {
    console.log(chalk.red('[') + chalk.blue(shardID) + chalk.red(`]--------------- `) + chalk.blue(`${client.user.username}`) + chalk.red(` Resumed! ---------------`));
});
////////////////////////////////////////SHARD EVENTS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

////////////Login////////////
client.login(config.token);
////////////Login////////////
/////////////////////////////