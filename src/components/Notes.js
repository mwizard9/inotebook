import React from 'react'
import { useContext, useRef } from 'react'
import noteContext from '../context/Notes/NoteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';
import { useEffect,useState } from 'react';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)

  const[note,setNote] = useState({id:"", etitle:"",edescription:"",etag:""});

  const updateNote = (currentNotes) => {
    ref.current.click();
    setNote({id: currentNotes._id, etitle:currentNotes.title,edescription:currentNotes.description,etag:currentNotes.tag})

  }


  const handleClick = (e) => {
    console.log("updating the note",note)
    refClose.current.click();
    
}
const onChange = (e)=>{
    setNote({...notes, [e.target.name]: e.target.value})
}
  return (
    <>
      <AddNote />



      <button ref={ref} type="button" className='d-none' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3 mx-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" value={note.edescription} id="edescription" name='edescription' onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" value={note.etag} id="etag" name='etag' onChange={onChange} />
                </div>
               
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3 mx-3">
        <h3>your Notes</h3>
        {notes.map((notes) => {
          return <Noteitems key={notes._id} updateNote={updateNote} notes={notes} />;
        })}
      </div>
    </>
  )
}

export default Notes
