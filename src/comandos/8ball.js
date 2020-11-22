const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let pregunta = args.join(' ')
	let respuestas = ['Si', 'No', 'No se', 'No voy a contestar eso', 'Puede ser', 'Claro que si', 'Claro que no', 'Obvio']
	let syntax = "```ini\n" + "" + "[ >8ball <pregunta> ]```"

	if(!pregunta) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	const bEmbed = new Discord.MessageEmbed()
	.setTitle('**[ :8ball: 8ball :8ball: ]**')
	.addField('Tu pregunta: ', pregunta)
	.addField('Mi respuesta es: ', respuestas[Math.floor(Math.random() * respuestas.length)], true)
	message.channel.send(bEmbed)
}