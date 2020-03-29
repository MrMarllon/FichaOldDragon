const express = require('express')
const router = express.Router()

//Importing Celebrate Objects to validation of http methods
const { celebrate, Segments, Joi } = require('celebrate')

//Controllers IMPORTS
const queries = require('./controller/queries')
        
//Profile
router.get('/profile', celebrate({
    [Segments.QUERY]: Joi.object().keys({

        id: Joi.string().required()

    })
}), queries.index_unique)

router.delete('/profile', celebrate({
    [Segments.QUERY]: Joi.object().keys({

        id: Joi.string().required()

    })
}), queries.delete)

// Ficha Management
router.get('/fichamanagement', queries.index)
router.get('/fichamanagement/ids', queries.index_IDs)

router.post('/fichamanagement', celebrate({
    [Segments.BODY]: Joi.object().keys({

        player_name      : Joi.string().required(),
        caracter_name    : Joi.string().required(),
        caracter_race    : Joi.string().required(),
        caracter_class   : Joi.string().required(),
        caracter_aligment: Joi.string().required(),
        level            : Joi.number().min(1).max(2).required(),
        description      : Joi.string().required()

    })
}), queries.create)

module.exports = router