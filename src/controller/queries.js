const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {

    //Listar Ficha específica do DB
    async index_unique(req, res){

        const id_file  = req.query.id

        const ficha_unique = await connection('ficha')
            .where('id_file', id_file)
            .select('*')
        
        console.log(ficha_unique)
        return res.json(ficha_unique)
    },

    //Deletar Ficha do DB
    async delete(req, res){

        const id_file = req.query.id

        await connection('ficha')
            .where('id_file', id_file)
            .delete()

        return res.status(204).send()
    },

    //Listar Todas Fichas do DB
    async index(req, res){

        //Totald e fichas
        const [count] = await connection('ficha')
            .count()

        const fichas = await connection('ficha')
            .select('*')
        
        res.header('X-Total-Count', count['count(*)'])
        
        return res.json(fichas)
    },
    
    // Listar Ficha específica do DB
    async index_IDs(req, res){

        const id = await connection('ficha')
            .select('id_file')
        
        return res.json(id)
    },

    //Criar Nova Ficha no DB
    async create(req, res){

        const { player_name, caracter_name, caracter_race, caracter_class, caracter_aligment, level ,description} = req.body

        const id_file = `${caracter_name}${generateUniqueId()}` 
        
        await connection('ficha').insert({
            id_file,
            player_name,
            caracter_name,
            caracter_race,
            caracter_class,
            caracter_aligment,
            level,
            description
        })

        console.log(req.body)
        return res.json({ id_file })
    },
    
}