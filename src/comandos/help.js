const Discord = require('discord.js')

module.exports = (client, message, args) => {
	const help = new Discord.MessageEmbed()
	.setTitle('**[ Comandos :desktop:]**')
	.setDescription('**prefix:** p/')
	.addField("Comandos de entretenimiento", "**| `p/avatar` | `p/hablar` | `p/8ball` | `p/gay` | `p/boom` | `p/kill` | `p/abrazar` |**")
	.addField("Comandos de moderacion", "**| `p/anuncio` | `p/crearencuesta` | `p/kick` | `p/ban` | `p/md` | `p/clear` | `p/crearembed` | `p/eval` |**")
  
	.addField("Otros comandos", "**| `p/invite` | `p/hola` | `p/ping` | `p/userinfo` |**")
	.setFooter(`${message.guild.name}`)
	.setTimestamp()
	message.channel.send(help)
}
