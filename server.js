const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('hello world test 2');
})

app.listen(8080, function () {
	console.log('Example app listening on port 3000!')
})
