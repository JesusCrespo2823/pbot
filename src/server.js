const express = require('express')
const server = express()

server.all('/', (req, res) => {
	res.send('Hola mu wenas')
})

function mantener(){
	server.listen(3000, () => {
		console.log('server on')
	})
}

module.exports = mantener