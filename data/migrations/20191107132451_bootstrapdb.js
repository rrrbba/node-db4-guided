
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
      tbl.increments(); //primary key type is integer w/out neg values (unsigned)
      tbl.string('name', 255).notNullable();
  })
  .createTable('animals', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      //define foreign key (has to be integer b/c prim key from species is an integer)
      tbl.integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT') //about what to do dele. the record from the primary key table ('RESTRICT, NO ACTION, SET NULL)
      .onUpdate('CASCADE');//about changing value of primary key
  })
  .createTable('zoos', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('address', 512);
  })
  .createTable('animal_zoos', tbl => {
      tbl.increments();
      tbl.integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('RESTRICT') 
      .onUpdate('CASCADE');

      tbl.integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('animals')
      .onDelete('RESTRICT') 
      .onUpdate('CASCADE');
      
      tbl.date('from').notNullable();
      tbl.date('to');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('animal_zoos')
  .dropTableIfExists('animals')
  .dropTableIfExists('zoos')
  .dropTableIfExists('species');
};
