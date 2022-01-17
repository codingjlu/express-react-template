const path = require("path");
const kleur = require("kleur");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const public = path.join(__dirname, "client", "dist");
app.use(express.static(public));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(public, "index.html"));
});

app.listen(3000, function() {
  console.log(kleur.cyan().bold().underline('Server started on http://localhost:3000.'));
});
