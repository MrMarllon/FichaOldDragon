// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Configuraração inicial do servidor
const express = require("express")
const server = express()
var path = require('path');

// Configurando servidor para arquivos estáticos / complementares
server.use(express.static(path.join(__dirname,'src')))

// Habiltiar body
server.use(express.urlencoded({ extended: true}))




// // Startando a página INDEX
server.get("/", function(req, res){   
   
    // db.query("SELECT * FROM donors", function(err, result){

    //     if(err) return res.send("Erro ao acessar o Bando de Dados!")

    //     const donors = result.rows

    // })
    return res.render("index.html")
})

// Configurando a Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})


// // Pegando dados do formulário
// server.post("/", function(req, res){
//     const name  = req.body.name
//     const email = req.body.email
//     const blood = req.body.blood

//     // Verificação de NULLs
//     if(name == "" || email == "" || blood == ""){

//         return res.send("Por favor, preencha todos os campos!")
//     }

//     // Colocando dados no BD
//     const query = `
//             INSERT INTO donors ("name", "email", "blood") 
//             VALUES ($1,$2,$3)`

//     const values = [name,email,blood]
    
//     db.query(query, values, function(err){

//         // IF ERROR
//         if(err) return res.send("Erro ao acessar o Bando de Dados!")

//         //IF SUCESS
//         return res.redirect("/")
//     })
// })

// Conectar servidor à porta 3000
const hostname = '127.0.0.1';
const port = 3000;

server.listen(3000, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

