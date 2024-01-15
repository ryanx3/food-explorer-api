const express = require("express");
const app = express();

app.use(express.json()); //Para a api saber qual o padrão vamos utilizar para enviar infos que no caso é o json.

const routes = require('./routes')

app.use(routes)

const PORT = 3333;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
 