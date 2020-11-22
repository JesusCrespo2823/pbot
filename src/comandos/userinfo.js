const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let muser = message.mentions.users.first()
	if (!muser) {
		let user = message.author

		const iEmbed = new Discord.MessageEmbed()
		.setThumbnail(`${user.displayAvatarURL()}`)
		.setTitle("Informacion de "+user.username)
		.addField("Nombre: ", user.tag, true)
		.addField("ID: ", user.id, true)
		.addField("Estado: ", user.presence.status, true)
		.addField("Jugando a: ", user.presence.game != null ? user.presence.game.name: "Nada", true)
		.addField("Apodo: ", message.member.nickname ? message.member.nickname : "No tiene", true)
		.addField("Cuenta Creada el: ", user.createdAt.toLocaleString(), true)
		.addField("Roles: ", message.member.roles.cache.map(roles => `\`${roles.name}\``).join(','))
		.setColor('RANDOM')
		message.channel.send(iEmbed)
	} else {
		const iEmbed = new Discord.MessageEmbed()
		.setThumbnail(`${muser.displayAvatarURL()}`)
		.setTitle("Informacion de "+muser.username)
		.addField("Nombre: ", muser.tag, true)
		.addField("ID: ", muser.id, true)
		.addField("Estado: ", muser.presence.status, true)
		.addField("Jugando a: ", muser.presence.game != null ? muser.presence.game.name: "Nada", true)
		.addField("Apodo: ", muser.nickname ? muser.nickname : "No tiene", true)
		.addField("Cuenta Creada el: ", muser.createdAt.toLocaleString(), true)
		.setColor('RANDOM')
		message.channel.send(iEmbed)
	}
}