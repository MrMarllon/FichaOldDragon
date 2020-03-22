// Configuraração inicial do servidor
const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const dbaccess = require('./dbaccess')
const server = express()

// Configurando servidor para arquivos estáticos / complementares
server.use(express.static(path.join(__dirname,'src')))

// Habilitar body
server.use(express.urlencoded({ extended: true}))

// Parse JSON bodies
server.use(express.json());

// Startando a página INDEX
server.get("/", function(req, res){   
    return res.render("index.html")
})

// Conectar servidor à porta 3000
const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

// Configurando a Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

// Pegando dados do formulário
server.post("/", function(req, res){

    const value = req.body.search

    // Verificação de NULLs
    if(value == ""){

        console.log('Falha!')
        return res.send("Por favor, primeiro procure por uma ficha!")
    }
    

    // module.exports = {

    //     returnFicha(){
    //         const ficha = dbaccess.searchFile(value)
    //     }
    // }
    
    function returnFicha(){
         const ficha = dbaccess.searchFile(value)
    }

    export function returnFicha()

    return res.redirect("/")

})