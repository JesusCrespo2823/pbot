const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let user = message.mentions.users.first()
	let syntax = "```ini\n" + "" + "[ p/asustar <@user> ]```"

	if(!user) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	const aEmbed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} asusto a ${user.username}`)
	.setImage('https://media.tenor.co/videos/b2b478e3140f5a8a9c5355f2606e6ab3/mp4')
	message.channel.send(aEmbed)
}