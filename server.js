const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views/')
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.render('index', {title: 'Mohamed Hassan'})
})

app.listen(3003, () => {
  console.log('Example app listening on port 3003!')
})
