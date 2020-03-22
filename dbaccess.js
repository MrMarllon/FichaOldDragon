// Configurar Banco de Dados
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dragon'
})

module.exports = {
    
    searchFile(value){

        //Connecting to DB
        db.connect((err) => {
        
            if (err){
                console.log('Erro ao conectar-se ao Banco de Dados', err)
                return
            }
            console.log('Sucesso ao conectar-se ao Banco de Dados')
        
        })
        
        //Finishing DB
        db.end((err) => {
        
            if (err){
                console.log('Erro ao finalizar o Banco de Dados', err)
                return
            }
            console.log('Sucesso em finalizar o Banco de Dados')
        
        })

        //Searching selected ficha on DATABASE
        db.query(`SELECT * FROM fichas WHERE char_name = ${value}`,(err, rows) =>{
            
            if(err){
                //alert('O acesso ao Banco de Dados falhou!')
                console.log('Falha ao acessar o Banco Dados')
                throw err  
            } 

            console.log('Fichas: ',rows, '\n\n')
            //alert('O acesso ao Banco de Dados foi concluído!')
            
        })
    }
}   