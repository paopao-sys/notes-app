import { useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";

const Content = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from("notes").select("*");

      if (error) {
        setError("Could not fetch notes.");
        setNotes(null);
        setLoading(false);
        console.log("error", error);
      }
      if (data) {
        setError(null);
        setNotes(data);
        setLoading(false);
        console.log("data", data);
      }
    };
    fetchNotes();
  }, []);

  return (
    <>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          {notes &&
            notes.map((note) => (
              <div key={note.id} className="card bg-base-200 p-2 my-2 m-2">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.content}</p>
              </div>
            ))}
          {/* <div className="card-actions justify-end"></div> */}
        </div>
      </div>
      {loading && <p className="text-center">Fetching notes...</p>}
      {error && <p className="text-center text-error">{error}</p>}
    </>
  );
};

export default Content;
