// Configuraração inicial do servidor
const express = require("express")
const cors = require('cors')
const { errors } = require('celebrate')
// const path = require('path')

//Router IMPORT
const routes = require('./router')


// Habilitar body
// app.use(express.urlencoded({ extended: true}))

//App Config
const app = express()

// Configurando servidor para arquivos estáticos / complementares
app.use('/assets',express.static('assets'))

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app

// Configurando a Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: app,
    noCache: true,
})