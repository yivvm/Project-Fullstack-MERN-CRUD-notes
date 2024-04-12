import create from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: "",
    body: "",
  },

  updateForm: {
    title: "",
    body: "",
    _id: null,
  },

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get(
      "https://project-mern-crud-notes.onrender.com/notes"
    );
    // Set to State
    set({ notes: res.data.notes });
    // console.log(res);
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    // Create the note
    const { createForm, notes } = notesStore.getState();
    const res = await axios.post(
      "https://project-mern-crud-notes.onrender.com/notes",
      createForm
    );

    // Update state
    set({
      notes: [...notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    });
  },

  deleteNote: async (_id) => {
    // Delete the note
    const res = await axios.delete(
      `https://project-mern-crud-notes.onrender.com/notes/${_id}`
    );
    const { notes } = notesStore.getState();
    // console.log(res);

    // Update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    set({ notes: newNotes });
  },

  handleUpdateFieldChange: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, title, body }) => {
    // Get the current note values
    // console.log(note);

    // Set state on update form
    set({
      updateForm: {
        title,
        body,
        _id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      updateForm: { title, body, _id },
      notes,
    } = notesStore.getState();

    // Send the update request
    const res = await axios.put(
      `https://project-mern-crud-notes.onrender.com/notes/${_id}`,
      {
        title,
        body,
      }
    );
    console.log(res);

    // update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    // set State and Clear the updateForm state
    set({
      notes: newNotes,
      updateForm: {
        title: "",
        body: "",
        _id: null,
      },
    });
  },
}));

export default notesStore;
