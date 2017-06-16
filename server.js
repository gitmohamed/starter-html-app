const express = require('express')
const ejs = require('ejs')
const app = express()

const port = process.env.port || 3003

app.set('view engine', 'ejs')
app.set('views', 'views/')
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.render('index', {title: 'Mohamed Hassan'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
