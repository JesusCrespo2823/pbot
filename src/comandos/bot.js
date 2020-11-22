const Discord = require('discord.js')

module.exports = (client, message, args) => {
	const bEmbed = new Discord.MessageEmbed()
	.setTitle('Informacion sobre PBot')
	.addField('Informacion', '**=>** Nombre: PBot :robot: \n **=>** Prefix: p/ \n **=>** Idioma: Español \n **=>** Hecho en: Discord.js V12 :books: \n')
	.addField('Que es PBot? :robot:', 'PBot es un bot multifuncional creado por P I N G U#3070 y por Jhonso#8186, fue creado para ayudar a los usuarios, y facilitarle ciertas cosas para sus server \n')
	.addField('Informacion de los desarrolladores', '**=>** Nombre: P I N G U#3070 \n **=>** Aportes: Diferentes comandos del bot, desarrollo del sitio web, y diseños \n -------------------------------------------------- \n **=>** Nombre: Jhonso#8186 \n **=>** Aportes: Diferentes comandos del bot \n')
	.setFooter('Informacion de PBot')
	.setTimestamp()
	message.channel.send(bEmbed)
}