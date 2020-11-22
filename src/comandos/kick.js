const Discord = require('discord.js')

module.exports = async (client, message, args)=>{
	if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('No tienes suficientes permisos para usar este comando')
	let member = message.mentions.users.first()
	let razon = args.slice(1).join(' ')
	let syntax = '```ini\n' + "" + "[ p/kick <@user> <razon> ]```"

	if(!member) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
	if(!razon){
		razon = "El usuario no especifico una razon"
	}

	const person = new Discord.MessageEmbed()
	.setTitle('Usuario kickeado exitosamente')
	.addField('**Usuario**', member)
	.addField('**Razon**', razon)
	.addField(`**Moderador responsable: **`, message.author.username)

	try {
		try{
			member.send(person)
		} catch (err) {
			message.channel.send('Un error ocurrio al tratar de avisarle al usuario: '+err)
		}
		await message.guild.member(member.id).kick(razon)
		message.channel.send(person)
	} catch(err) {
		message.channel.send('Un error desconocido ha sucedido: '+err)
	}
}