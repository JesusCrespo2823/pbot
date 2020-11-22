const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let bot = message.guild.me;
	const inEmbed = new Discord.MessageEmbed()
	.setTitle('Click aqui para invitar a PBot a tu server')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=778802663105364008&permissions=0&scope=bot')
	.setFooter('PBot')
	.setTimestamp()
	message.channel.send(inEmbed)
}