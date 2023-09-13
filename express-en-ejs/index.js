const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("node:path");

const { sequelize } = require("./database");

const { NoteModel } = require("./src/models/Notes");

const app = express();

// para que funcione el body de los controllers
app.use(express.json());

// para poder mandar informacion desde un formulario de html
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan("dev"));

app.set("views", __dirname + "/src" + "/views");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const notas = await NoteModel.findAll();

  res.render("index", {
    title: "Pagina princial",
    listaDeNotas: notas.reverse(),
  });
});

app.get("/crear", async (req, res) => {
  res.render("crear");
});

app.get("/editar/:id", async (req, res) => {
  const noteId = req.params.id;

  const note = await NoteModel.findByPk(noteId);

  res.render("editar", { note });
});

app.use("/notes", require("./src/routes/notes.routes"));

app.listen(3000, () => {
  sequelize
    .sync({ force: false })
    .then(() => console.log("db is connected"))
    .catch((err) => console.log(err));
  console.log("server on port 3000");
});
