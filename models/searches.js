const database = require("../database_connection");

function list(){

  return database("searches").select();
}

function read(id) {
  return database("searches")
  .select().where("id", id).first();
}

function create(search) {
  return database("searches")
  .insert(search).returning("*")
  .then(searches => searches[0]);

}

function update(id, search){
  console.log(id, search);
  return database("searches")
  .update(search).where("id", id)
  .returning("*").then(searches => searches[0]);

}

function remove(id){
  return database("searches").delete()
  .where("id", id)
  .returning("*").then(searches => searches[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
  remove
};
