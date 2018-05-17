exports.up = function(knex, Promise) {
  return knex.schema.createTable("results", results => {
    results.increments();
    results.string("resultsTerm");
    results.timestamps();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("results");

};
