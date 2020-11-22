const Discord = require('discord.js')

module.exports =(client, message, args)=>{
		let say = args.join(' ')
		let sayc = args.slice(1).join(' ')
		let canal = message.mentions.channels.first()
		let syntax = '```ini\n' + "" + "[ >hablar <palabra> ]\n```" + "" + "Solo moderadores: \n" + "" + "```ini\n" + "" + "[ >hablar <#canal> <palabra> ]```"

		if(!say) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)

		if(!canal){
			message.channel.send(say)
		} else {
			if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos para usar esta opcion')
			if(!sayc) return message.channel.send('Por favor, asegurate de escribir bien el comando: '+syntax)
			canal.send(sayc)
		}

	}