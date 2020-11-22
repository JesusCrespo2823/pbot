const Discord = require('discord.js')

module.exports = (client, message, args) => {

   	let mensaje = args.join('%20');
   	let api = `https://ctk-api.herokuapp.com/clyde/${mensaje}`
   	let syntax = "```ini\n" + "" + "[ >clyde <mensaje> ]```"

   	if(!mensaje) {
   		message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
   	}
 
 	const embe = new Discord.MessageEmbed()
 	.setTitle('Mensaje De Clyde')
 	.setImage(api)
 	.setColor('RANDOM')
 	message.channel.send(embe)
 	message.delete()
}