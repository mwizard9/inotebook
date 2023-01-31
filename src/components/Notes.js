import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNote/>

      <div className="row my-3 mx-3">
        <h3>your Notes</h3>
        {notes.map((notes) => {
          return <Noteitems key={notes._id} notes={notes} />;
        })}
      </div>
    </>
  )
}

export default Notes
