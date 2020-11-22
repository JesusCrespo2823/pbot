module.exports = (client, message, args) => {
	let dado = Math.floor(Math.random() * 7)
	message.channel.send('Tiras el dado y sale: '+dado)
}