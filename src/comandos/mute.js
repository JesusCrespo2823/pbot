const Discord = require('discord.js')

module.exports = async (client, message, args) => {
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('No tienes suficientes permisos')
	if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('No tengo los suficientes permisos')

	let user = message.mentions.members.first()
	let razon = args.slice(1).join(' ')
	let syntax = "```ini\n" + "" + "[ >mute <@user> <razon> ]```"
	
	if(!user) return message.channel.send('Por favor, asegurate de escribir bien el comando'+syntax)
	if(!razon) return message.channel.send('Por favor, asegurate de escribir bien el comando'+syntax)
	if(user.id === message.author.id) return message.channel.send('No te puedo mutear -_-')

	let muterole = message.guild.roles.cache.find(x => x.name === "muted")

	if (!muterole) /*return message.channel.send('No encontre el rol `Muted`, por favor crealo')*/{
		try{
			muterole = await message.guild.roles.create({
				name: "Muted",
				color: "#000",
				permissions: 0,
			})
		} catch(err) {
			message.channel.send('Un error sucedio: '+err)
		}
	}

	try {
		user.roles.add(muterole)
		await message.channel.send(`Acabas de mutear a ${message.mentions.users.first().username} por ${razon}`)
	} catch(err) {
		message.channel.send('Un error a sucedido: '+err)
	}
}	