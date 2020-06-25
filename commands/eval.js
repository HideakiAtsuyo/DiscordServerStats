const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("../assets/config.json");

let forbidden = ["client.token", "config.token"]; //For an another update

exports.run = async (client, message, args) => {
    if (!config.owners.includes(message.author.id)) {} else {
        return;
    }
    try {
        let args = message.content.split(' ').slice(1);
        var code = args.join(" ");
        if (code === "client.token" || code === "message.channel.send(`${client.token}`)" || code === "message.channel.send(`<${client.token}`)" || code === "const { exec } = require(‘child_process’)" || code === "const exec = require(‘child_process’)" || code === "message.channel.send(`<@${client.token}`)" || code === "message.channel.send(`<@${client.token}>`)" || code === "message.channel.send(`<${client.token}>`)" || code === "message.channel.send(`${client.token}>`)" || code === "message.channel.send(`${client.token}@`)") return message.channel.send("```md\n[You believed it?](I don't give my token to fools.)```");//Replaced in next update.
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        if (evaled == "undefined") {
            var evaled = "Please enter a code to evaluate.";
        }

        const embed = new Discord.RichEmbed()
            .setColor("#36393f")
            .addField(":inbox_tray: Input: ", `\`\`\`js\n${code}\`\`\``)
            .addField(":outbox_tray: output: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
        message.channel.send(`\`\`\`js\n${clean(evaled)}\n\`\`\``)
    } catch (err) {
        const embed = new Discord.RichEmbed()
            .setColor("#36393f")
            .addField(":inbox_tray: Input: ", `\`\`\`js\n${code}\`\`\``)
            .addField(":outbox_tray: output: ", `\`\`\`js\n${clean(err)}\`\`\``)
        message.channel.send(`\`\`\`js\n${clean(err)}\`\`\``)
    }

    function clean(text) {
        if (typeof(text) === 'string')
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        else
            return text;
    }
}
