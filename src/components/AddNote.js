import React,{useContext,useState} from 'react'
import noteContext from '../context/Notes/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote} = context;

    const[notes,setNote] = useState({title:"",description:"",tag:"default"});
    const handleClick = (e) => {
        e.preventDefault();
        addNote(notes.title, notes.description, notes.tag);

    }
    const onChange = (e)=>{
        setNote({...notes, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <div className="container my-3">
        <h3>add your note</h3>
        <form className='my-3 mx-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
     
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
          </div>
          <button onClick={handleClick} type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
