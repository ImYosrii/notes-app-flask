import { MdDelete } from "react-icons/md";

export default function Note({note, noteId, deleteNote}){
    return (
        <div className="note-container">
            <div className="note">
                <p>{note}</p>
            </div>
                <MdDelete className="delete-ico" onClick={()=>deleteNote(noteId)}/>
        </div>
    );
}