import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create note</h2>
      <form onSubmit={store.createNote}>
        <input
          value={store.createForm.title}
          onChange={store.updateCreateFormField}
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
          placeholder="Body"
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}
