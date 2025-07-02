import { useState, useEffect } from "react"

import { createNote, getNotes } from "../utilities/api"
import Note from "../components/Note"

export default function Home({ user }) {
    const [notesArray, setNotesArray] = useState([])
    const [note, setNote] = useState("")
    
    const notes = notesArray.map(note=>{
        return <Note key={note[0]} note={note[1]} noteNum={note[0]} />
    })

    useEffect(() => {
        async function fetchNotes() {
            const response = await getNotes(user)
                if (response){
                    setNotesArray(response)
                }
        }
        fetchNotes()

    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        if (note.trim() === "") {
            alert("Note cannot be empty");
            return;
        }
        
        async function addNote(){
            const response = await createNote(note, user)
            if (response[0] === "Note created successfully") {
                
                setNotesArray([...notesArray, [response[1], note]])
                alert("Note created successfully")
                setNote("") 
            }
            else {
                alert("Error creating note. Please try again.")
            }
        }
        addNote()
    }
    return (
        <div className="home-page">
            {notes}
            <form className="note-form" onSubmit={handleSubmit}>
                <textarea 
                    className="note-input"
                    placeholder="Write your note here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <button type="submit">Add note</button>
            </form>
        </div>
    )
}