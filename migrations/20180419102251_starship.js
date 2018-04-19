exports.up = function(knex, Promise) {
  return knex.schema.createTable("starship", starship => {
    starship.increments();
    starship.string("ship");
    starship.string("pilot");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("starship");

};
