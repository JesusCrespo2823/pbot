const Discord = require('discord.js')

module.exports = (client, message, args)=>{
		let miembro = message.mentions.users.first();
      if (!miembro) {
        const embed = new Discord.MessageEmbed()
          .setImage(`${message.author.displayAvatarURL()}`)
          .setColor("RANDOM")
          .setFooter(`Avatar de ${message.author.tag}`);
        message.channel.send(embed);
      } else {
        const embed = new Discord.MessageEmbed()
          .setImage(`${miembro.displayAvatarURL()}`)
          .setColor("RANDOM")
          .setFooter(`Avatar de ${miembro.tag}`);

        message.channel.send(embed);
    }
	}