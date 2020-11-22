const Discord = require('discord.js')

module.exports = (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No tienes los permisos suficientes para ejecutar este comando')
    const command = message.content.split(' ').slice(1).join(' ');
    const evEmbed = new Discord.MessageEmbed()
    .setTitle('Evaluaciones')
    .addField('Tu evaluacion fue esta: ', '```' + `${command}` + '```')
    .addField('Y el resultado fue este: ', '```' + `${eval(command)}` + '```')
    message.channel.send(evEmbed)
}
