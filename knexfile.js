require("dotenv").load();
module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/starships"
  }

};
