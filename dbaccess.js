// Configurar Banco de Dados
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dragon'
})

db.connect((err) => {
    if (err){
        console.log('erro ao conectar', err)
        return
    }
    
    console.log('funcionando')

})

db.end((err) => {
    if (err){
        console.log('erro ao finalizar', err)
        return
    }
    
    console.log('finalizou')

})

export function selectdb(charname){
db.query(`select * from fichas where char_name = ${charname}`,(err, row))}