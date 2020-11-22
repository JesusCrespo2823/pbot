const Discord = require('discord.js')

module.exports = (client, message) => {
		let args = message.content.split(' ').slice(2)
		let canal = message.mentions.channels.first()
		let encuesta = args.join(' ')
		let syntax = '```ini\n' + "" + "[ p/anuncio <#canal> <anuncio> ]```"

		if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos suficientes')
		if(!encuesta) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
		if(!canal) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

		const resEmbed = new Discord.MessageEmbed()
		.setTitle('Noticia enviada :mailbox_with_mail:')

		message.channel.send(resEmbed).then(m => m.delete({timeout: 4000}))

		const enEmbed = new Discord.MessageEmbed()
		.setTitle(':pushpin: Nuevo Anuncio :pushpin:')
		.setDescription(encuesta)
		.setFooter(`Administracion de ${message.guild.name}`)
		.setTimestamp()
		canal.send(enEmbed)
}