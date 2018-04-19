const database = require("../database_connection");

function list(){

  return database("starship").select();
}

function read(id) {
  return database("starship")
  .select().where("id", id).first();
}

function create(starship) {
  return database("starship")
  .insert(starship).returning("*")
  .then(starships => starships[0]);

}

function update(id, starship){
  return database("starship")
  .update(starship).where("id", id)
  .returning("*").then(starships => starships[0]);

}

function remove(id){
  return database("starship").delete()
  .where("id", id)
  .returning("*").then(starships => starships[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
  remove
};
