const Discord = require('discord.js')

module.exports = (client, message, args) => {
	message.channel.createInvite().then(invite => message.channel.send(`Invitacion para el servidor: \n https://www.discord.gg/${invite.code}`))
}