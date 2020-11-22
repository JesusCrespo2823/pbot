module.exports = async (client, message, args) => {
	let cantidad = args.join(' ')
	let syntax = "```ini\n" + "" + "[ p/clear <@cantidad> ]```"

	if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos suficientes')
	if(!cantidad) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
	if(isNaN(cantidad)) return message.channel.send('Por favor, la cantidad tiene que ser un numero')

	if (cantidad > 100) return message.channel.send('No puedo borrar mas de 100 mensajes')
	if (cantidad < 1) return message.channel.send('Debes borrar al menos un mensaje')

	try{
		await message.channel.messages.fetch({ limit: cantidad }).then(messages => {
			message.channel.bulkDelete(messages)
		})
		message.channel.send('```Borre ' + `${cantidad}` + ' mensajes```').then(m => m.delete({ timeout: 2000 }))
	} catch(err) {
		message.channel.send('Un error a sucedido: '+err)
	}
}