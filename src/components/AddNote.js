import React,{useContext,useState} from 'react'
import noteContext from '../context/Notes/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote} = context;

    const[notes,setNote] = useState({title:"",description:"",tag:""});
    const handleClick = () => {

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
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" />
     
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
