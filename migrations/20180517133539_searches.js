exports.up = function(knex, Promise) {
  return knex.schema.createTable("searches", searches => {
    searches.increments();
    searches.string("searchTerm");
    searches.timestamps();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("searches");

};
