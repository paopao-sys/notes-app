const NoteCard = ( note ) => {
  return (
    <div key={note.id} className="card bg-base-200 p-8 my-2 m-2 max-w-[350px]">
      <h2 className="card-title text-2xl p-2">{note.title}</h2>
      <p className="p-2">{note.content}</p>
    </div>
  );
};

export default NoteCard;