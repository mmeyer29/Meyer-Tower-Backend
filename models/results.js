const database = require("../database_connection");

function list(){

  return database("results").select();
}

function read(id) {
  return database("results")
  .select().where("id", id).first();
}

function create(result) {
  return database("results")
  .insert(result).returning("*")
  .then(results => results[0]);

}

function update(id, result){
  return database("results")
  .update(result).where("id", id)
  .returning("*").then(results => results[0]);

}

function remove(id){
  return database("results").delete()
  .where("id", id)
  .returning("*").then(results => results[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
  remove
};
