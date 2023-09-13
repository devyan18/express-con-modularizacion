const { Router } = require("express");
const {
  createNote,
  listNotes,
  updateNote,
} = require("../controllers/notes.controllers");

const router = Router();

router.get("/", listNotes);
router.post("/", createNote);
router.post("/:id", updateNote);

module.exports = router;
