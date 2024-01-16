const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

//function assincrona para abrir um banco de dados OPEN
//Objeto de configuraçao do db, primeiramente o local aonde ele ficará
//Segundo o driver que ele utilizará que no nosso caso é o sqlite3
async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });
  return database;
}

module.exports = sqliteConnection;
