import { useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";
import NoteCard from "./NoteCard";

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
        <div className="flex justify-center p-2 w-[99vw]">
          {notes && notes.map((note) => <NoteCard key={note.id} {...note} />)}
          {/* <div className="card-actions justify-end"></div> */}
        </div>
      </div>
      {loading && <p className="text-center">Fetching notes...</p>}
      {error && <p className="text-center text-error">{error}</p>}
    </>
  );
};

export default Content;
