// Configurar Banco de Dados
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dragon',
    port: 3306
})

//Connecting to DB
db.connect((err) => {
        
    if (err){
        console.log('Erro ao conectar-se ao Banco de Dados', err)
        return
    }
    console.log('Sucesso ao conectar-se ao Banco de Dados')

})

// //Finishing DB
// db.end((err) => {

//     if (err){
//         console.log('Erro ao finalizar o Banco de Dados', err)
//         return
//     }
//     console.log('Sucesso em finalizar o Banco de Dados')

// })

module.exports = {
    
    searchFile(value){

        //Searching selected ficha on DATABASE
        db.query(`SELECT * FROM fichas WHERE char_name = '${value}'`,(err, result) =>{
    
            if(err){
                //alert('O acesso ao Banco de Dados falhou!')
                console.log('Falha ao acessar o Banco Dados')
                throw err  
            } 
            
            var char_name = JSON.parse(JSON.stringify(result))

            console.log(char_name)

            return JSON.parse(JSON.stringify(result))

            //document.querySelector('#server-answer').innerHTML(rows)

        })

    }

}   