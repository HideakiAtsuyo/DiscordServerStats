const Discord = require("discord.js");

exports.run = async (client, message) => {
if(!args[0]){
	return message.reply("Lmao my ping is private! I don't care if you want to know my ping!!")
} else {
	return message.reply("Why you use an arg in a ping command this isn't for ping an IP!")
}
}
