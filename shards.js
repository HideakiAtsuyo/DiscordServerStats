// For host with glitch.com

/*
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.send("check");
});
const listener = app.listen(3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
*/

/////////////////////////////////////////////Sharding/////////////////////////////////////////////

const Discord = require("discord.js"),
client = new Discord.Client();

let config = require('./assets/config.json');

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./statsbot.js', { 
	token: config.token,
	autoSpawn: true,
	respawn: true
});

manager.spawn(1);
manager.on('launch', shard => console.log());

/////////////////////////////////////////////Sharding/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////