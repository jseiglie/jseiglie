const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const Posts = require('./Models/Posts')
const Catego = require('./Models/Catego')

app.use(express.json());

//database
const db = require("./config/database");

//test db
try {
  db.authenticate().then(() => console.log("database conected"));
} catch (err) {
  console.log("error: " + err);
}

app.get("/", (req, res) => {
  res.send("up and running");
});

//Relationship 
Posts.hasMany(Catego, {foreingKey: "id_catego"})
Catego.belongsTo(Posts)

//Routes
app.use("/api/", require("./Routes/seiglie.routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
