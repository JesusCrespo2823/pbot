const Discord = require('discord.js')

module.exports = (client, message, args) => {
	let user = message.mentions.users.first()
	if(!user){
		user = message.author
	}
	let gay = Math.floor(Math.random() * 101)
	const gayEmbed = new Discord.MessageEmbed()
	.setTitle(' :rainbow_flag: Calculadora :rainbow_flag: ')
	.setDescription(`${user.username} es ${gay}%`)
	.setImage('https://i1.wp.com/www.homosensual.com/wp-content/uploads/2020/08/lgbt-pride-concept-support-gay-lesbian-couples-illustration-lgbt-flag-background_210544-51.jpg?fit=626%2C391&quality=80&ssl=1')
	message.channel.send(gayEmbed)
}