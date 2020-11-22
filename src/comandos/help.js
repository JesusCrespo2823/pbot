const Discord = require('discord.js')

module.exports = (client, message, args) => {
	const help = new Discord.MessageEmbed()
	.setTitle('**[ Comandos :desktop: ]**')
	.setDescription('**prefix:** >')
	.addField("[ Comandos de entretenimiento ]", "**| `avatar` | `hablar` | `8ball` | `gay` | `boom` | `kill` | `abrazar` | `clyde` |**")
	.addField("[ Comandos de moderacion ]", "**| `crearanuncio` | `crearencuesta` | `kick` | `ban` | `md` | `clear` | `crearembed` | `eval` |**")
	.addField("[ Otros comandos ]", "**| `invite` | `hola` | `ping` | `userinfo` |**")
	.setFooter(`${message.guild.name}`)
	.setTimestamp()
	message.channel.send(help)
}
