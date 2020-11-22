const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let user = message.mentions.users.first()
	let syntax = "```ini\n" + "" + "[ p/abrazar <@user> ]```"

	if(!user) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	const hEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} abrazo a ${user.username}`)
	.setImage('https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif')
	message.channel.send(hEmbed)
}