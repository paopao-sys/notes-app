import { useState } from "react";
import supabase from "../../config/supabaseConfig";

const CreateNoteModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("notes")
      .insert([{ title, content }]);

    if (error) {
      console.log("error", error);
    }
    if (data) {
      console.log("data", data);
      setTitle("");
      setContent("");
      document.getElementById("my_modal_5").close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit} method="dialog" className="text-center p-2">
            <h3 className="font-bold text-2xl py-3">Create New Note</h3>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs my-2"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="textarea textarea-bordered my-2"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}            
            ></textarea>
            {/* if there is a button in form, it will close the modal */}
            <div className="flex justify-around py-2">
              <button className="btn">Cancel</button>
              <button className="btn">Create</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CreateNoteModal;
