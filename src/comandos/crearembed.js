const Discord = require('discord.js')

module.exports = async (client, message, args) => {
	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No tienes suficientes permisos')


	let emb = args.join(' ').split(' | ')
	let syntax = "```ini\n" + "" + "[ p/crearembed <titulo> | <descripcion> | <color> ]```"

	if(!emb[0]) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
	if(!emb[1]) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
	const emEmbed = new Discord.MessageEmbed()
	.setTitle(emb[0])
	.setDescription(emb[1])
	.setColor(emb[2])
	.setTimestamp()
	message.channel.send(emEmbed)
	message.delete()
}
