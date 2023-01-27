import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext';

const Home = () => {
  const context = useContext(noteContext);
  const{notes, setNotes} = context;
  return (
    <div>
      <h1>This is Home</h1>
      <div className="container my-3">
        <h3>add your note</h3>
        <form className='my-3 mx-3'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container">
        <h3>your Notes</h3>
        {notes.map((notes)=> {
        return notes.title;
        })}
      </div>
    </div>
  )
}

export default Home
