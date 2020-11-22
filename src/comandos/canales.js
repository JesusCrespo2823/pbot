const Discord = require('discord.js')

module.exports = (client, message, args) => {
	if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes suficientes permisos para usar este comando')
	let res = Discord.Util.splitMessage(Discord.Util.discordSort(message.guild.channels.cache.filter(channel => channel.type == "category" && channel.permissionsFor(message.author).has('VIEW_CHANNEL'))).map(x => `[📂] ${x.name}\n\t${x.children.filter(a=>a.permissionsFor(message.author).has('VIEW_CHANNEL')).map(a=>a.type == 'text' ? '[💬] '+a.name : a.type == 'news' ? '[🔔] '+a.name : a.type == 'voice' ? '[🔊] '+ a.name + voiceChannelMembers(a) : a.name).join('\n\t')}\t`));
res.forEach(a=>message.channel.send(a, {code: ''}));

function voiceChannelMembers(channel){
let str = '';
const members = channel.members;
const stream = members.filter((x) => x.voice.streaming).map((x) => x.displayName.toLowerCase());
const nostream = members.filter((x) => !x.voice.streaming).map((x) => x.displayName.toLowerCase());
stream.sort();
nostream.sort();
stream.forEach((u) => {
 const m = message.guild.members.cache.find((x) => x.displayName.toLowerCase() === u);
 str += '\n'+m.displayName+' [Transmitiendo]';
});
nostream.forEach((u) => {
 const m = message.guild.members.cache.find((x) => x.displayName.toLowerCase() === u);
 str += '\n\t'+m.displayName;
});

return str;
}
}