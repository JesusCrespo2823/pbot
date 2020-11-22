const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let user = message.mentions.users.first()
	let syntax = "```ini\n" + "" + "[ p/boom <@user> ]```"

	if(!user) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	const bEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} hizo explotar a ${user.username}`)
	.setImage('https://media1.tenor.com/images/446cf660504fd9575ab12776792cfbb0/tenor.gif?itemid=6118939')
	message.channel.send(bEmbed)
}