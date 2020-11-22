const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let user = message.mentions.users.first()
	let syntax = "```ini\n" + "" + "[ p/kill <@user> ]```"

	if(!user) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	const kEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} a asesinado a ${user.username}`)
	.setImage('https://www.icegif.com/wp-content/uploads/among-us-kill-icegif.gif')
	message.channel.send(kEmbed)
}