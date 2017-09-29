const express = require('express')
const path = require('path')
const app=express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	console.log('App.get')
	res.render('index.ejs')


})

app.listen(port,  (req, res) =>  {

	console.log ('App acting on port ' + port + '. Visit localhost:'+port+' in chrome')

})