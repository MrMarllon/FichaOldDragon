// Configurar Banco de Dados
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dragon'
})

//Connecting to DB
db.connect((err) => {

    if (err){
        console.log('erro ao conectar', err)
        return
    }
    console.log('funcionando')

})

//Finishing to DB
db.end((err) => {

    if (err){
        console.log('erro ao finalizar', err)
        return
    }
    console.log('finalizou')

})

// Acessing DB by pressing btn-search
$('#btn-search').click(function(){

    db.query(`select * from fichas where char_name = ${$('#search-value').value}`,(err, rows) =>{
        if(err) throw err

        console.log('Fichas: ',rows, '\n\n')
        alert('O acesso ao Banco de Dados foi concluído!')
    })

})