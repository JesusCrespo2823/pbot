const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const mantener = require('./server.js')
const fs = require('fs')

client.comandos = new Discord.Collection()
for(const file of fs.readdirSync(__dirname + '/comandos/')) { 

  //Esta condición evitara que los archivos que no son tengan la extención .js no sean listado:
  if(file.endsWith(".js")) { 

  //Elimina los últimos tres caracteres nombre del archivo para
  //deshacerse de la extensión .js y solo quedarnos con el nombre del comando:
  let fileName = file.substring(0, file.length - 3); 

  //Define una nueva varible 'fileContents' de la exportación del comando 
  //dentro de la carpeta comandos:
  let fileContents = require(__dirname + `/comandos/${file}`); 

  //Agrega el nombre del comando a la colección client.commands con un 
  //valor de sus exportaciones respectivas.
  client.comandos.set(fileName, fileContents);
  }
}

const prefix = config.prefix

client.on('ready', () => {
    console.log('PBot al servicio ;v')
    const estados = [
    	`${client.guilds.cache.size} servidores | p/bot`,
    	`A ser desarrollado por P I N G U y Jhonso uwu`,
    	`A como ser cool`
    ]
    setInterval(() => {
    	client.user.setPresence({ activity: { name: estados[(Math.floor(Math.random() * estados.length ))] }, status: 'online', type: "WATCHING" })
    }, 5000);	
})

client.on('message', async (message) => {

  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  let cmd = client.comandos.get(command)
  if(!cmd) return;
  cmd(client, message, args)
})

client.on('guildCreate', guild => {
	client.channels.cache.get('779356432113336350').send(`Nuevo servidor: ${guild.name}\n Este servidor cuenta con: ${guild.memberCount} miembros`)
})

mantener()
client.login(config.token)
