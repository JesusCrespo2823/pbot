const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let mensaje = args.join('%20')
	let api = `https://api.no-api-key.com/api/v2/recaptcha?text=${mensaje}`

	const emb = new Discord.MessageEmbed()
	.setTitle('Flip Text')
	.setImage(api)
	message.channel.send(emb)
}