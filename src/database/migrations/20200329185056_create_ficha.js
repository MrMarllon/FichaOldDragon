exports.up = function(knex) {

    return knex.schema.createTable('ficha', function(table){

        table.string('id_file').primary()
        table.string('player_name').notNullable()
        table.string('caracter_name').notNullable()
        table.string('caracter_race').notNullable()
        table.string('caracter_class').notNullable()
        table.string('caracter_aligment').notNullable()
        table.decimal('level', 2).notNullable()
        table.string('description').notNullable()
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ficha')
};