const express = require('express')
const path = require('path')
const app=express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	console.log('App.get')
	res.render('index.ejs')


})

app.listen(3000,  (req, res) =>  {

	console.log ('App acting on port 3000. Visit localhost:3000 in chrome')

})