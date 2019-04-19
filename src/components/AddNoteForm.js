import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const position = useMousePosition();


    const addNote = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', title, noteBody })

        setTitle('');
        setNoteBody('');
    }

    return (
        <div>
            <p>Add note {position.x} - {position.y} </p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
                <button>Add Note</button>
            </form>
        </div>)
}

export default AddNoteForm;