module.exports = (client, message, args) => {
	let md = args.slice(1).join(' ')
	let user = message.mentions.users.first()
	let syntax = '```ini\n' + "" + "[ >md <@user> <mensaje> ]```"

	if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos suficientes para usar este comando')
	if (!md) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
	if (!user) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

	try {
		user.send(md)
		message.channel.send('Mensaje enviado satisfactoriamente').then(m => m.delete({timeout:1000}))
	} catch(err) {
		message.channel.send('Un error ha ocurrido: '+err)
	}
}