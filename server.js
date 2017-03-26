let express = require('express'),
	app = express(),
	router = new express.Router(),
	configure = require('./configure')


app = configure(app)

app.listen('8080', ()=>{
	console.log('Server listening at http://localhost:8080')
})
