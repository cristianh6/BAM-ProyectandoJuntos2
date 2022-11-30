// LIBRARIES //
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
/* const { validationResult } = require("express-validator"); */


// FILES //
const users = require("./data/users.json");

// view engine setup //
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// JSON // 
app.use(express.json());
app.use(express.static(path.join(__dirname, ".", "public")));
app.use(express.urlencoded({ extended: false }))


// ROUTES //
app.get("/", (req, res) => res.render("index"));

app.get("/register", (req, res) => res.render("register"));

app.post("/register", (req, res) => {

    let { register_name, register_surname, register_email } = req.body;
    lastID = users.length != 0 ? users[users.length -1].id : 0

    let newUser = {
      id: lastID +1,
      nombre: register_name,
      apellido: register_surname,
      correo: register_email
    }
    users.push(newUser);
    fs.writeFileSync(path.resolve(__dirname, ".", "data", "users.json"),
      JSON.stringify(users, null, 3),
      "utf-8"
    );
    return res.redirect("/")
  }
  
)



app.listen(3000);
console.log("Server is running on port", 3000);
