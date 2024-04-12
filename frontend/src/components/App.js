import { useState, useEffect } from "react";
import axios from "axios";
import notesStore from "../stores/notesStore";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

function App() {
  const store = notesStore();

  // State @notesStore.js

  // useEffect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  // Functions @notesStore.js

  return (
    <div className="App">
      <Notes />

      <UpdateForm />

      <CreateForm />
    </div>
  );
}

export default App;
