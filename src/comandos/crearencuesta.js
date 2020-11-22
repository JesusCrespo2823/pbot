const Discord = require('discord.js')

module.exports = (client, message) => {
		let args = message.content.split(' ').slice(2)
		let canal = message.mentions.channels.first()
		let encuesta = args.join(' ')
		let syntax = '```ini\n' + "" + "[ p/encuesta <#canal> <pregunta> ]```"

		if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos suficientes')
		if(!encuesta) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
		if(!canal) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

		const enEmbed = new Discord.MessageEmbed()
		.setTitle(':ballot_box: Nueva Encuesta :ballot_box:')
		.setDescription(encuesta)
		.setFooter(`Administracion de ${message.guild.name}`)
		.setTimestamp()

		const resEmbed = new Discord.MessageEmbed()
		.setTitle('Encuesta enviada :ballot_box:')

		message.channel.send(resEmbed).then(m => m.delete({timeout: 4000}))

		canal.send(enEmbed).then(async m => {
			await m.react('👍')
			await m.react('👎')
		})
	}