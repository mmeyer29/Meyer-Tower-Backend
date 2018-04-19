exports.seed = function(knex, Promise) {
  return knex("starship").del().then(() => {
      return knex("starship").insert([{
          id: 1,
          ship: "Millennium Falcon",
          pilot: "Han Solo"
        }, {
          id: 2,
          ship: "Slave 1",
          pilot: "Boba Fett"
        }]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE starship_id_seq RESTART WITH 3");
    });
};
