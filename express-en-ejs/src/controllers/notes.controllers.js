const { NoteModel } = require("../models/Notes");

const createNote = async (req, res) => {
  console.log(req.body);
  const { content, author, image } = req.body;

  await NoteModel.create({ content, author, image });

  res.redirect("/");
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { content, author, image } = req.body;

  const note = await NoteModel.findByPk(noteId);

  await note.update({ content, author, image });

  res.redirect("/");
};

const listNotes = async (req, res) => {
  const allNotes = await NoteModel.findAll();

  res.json(allNotes);
};

module.exports = { createNote, listNotes, updateNote };
