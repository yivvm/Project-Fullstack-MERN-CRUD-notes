const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  try {
    // Find the notes
    const notes = await Note.find();
    // Respond with the notes
    res.json({ notes: notes });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchNote = async (req, res) => {
  try {
    // Get id off the url
    const noteId = req.params.id;

    // Find the note using that id
    const note = await Note.findById(noteId);

    // Respond with the note
    res.json({ note: note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createNote = async (req, res) => {
  try {
    // Get the sent in data off request body
    const title = req.body.title;
    const body = req.body.body;

    // Create a note with it
    const note = await Note.create({
      title: title,
      body: body,
    });

    // Respond with the new note
    res.json({ note: note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateNote = async (req, res) => {
  try {
    // Get the id off the url
    const noteId = req.params.id;

    // Get the data off the req body
    const title = req.body.title;
    const body = req.body.body;

    // Find and update the record
    await Note.findByIdAndUpdate(noteId, {
      title: title,
      body: body,
    });

    // Find updated note
    const note = await Note.findById(noteId);

    // Respond with it
    res.json({ note: note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteNote = async (req, res) => {
  try {
    // Get id off url
    const noteId = req.params.id;

    // Delete the record
    await Note.deleteOne();
    //   await Note.deleteOne({ noteId });

    // Respond
    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  fetchNotes: fetchNotes,
  fetchNote: fetchNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};

// Update req.user._id after login works
// Source: https://www.youtube.com/watch?v=6X0b5peIW4w&list=PL-LRDpVN2fZA-1igOQ6PDcqfBjS-vaC7w&index=6
