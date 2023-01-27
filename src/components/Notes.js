import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext';
import Noteitems from './Noteitems';

const Notes = () => {
    const context = useContext(noteContext);
  const{notes, setNotes} = context;
  return (
    
      <div className="row my-3 mx-3">
        <h3>your Notes</h3>
        {notes.map((notes)=> {
        return <Noteitems key={notes.id} notes={notes}/>;
        })}
    </div>
  )
}

export default Notes
