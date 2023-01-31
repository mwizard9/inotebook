import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
    const notesInitial = 
        [ ]
          const [notes,setNotes] =useState(notesInitial)

          //Get all Notes
          const getNotes = async () => {
            // API call
            const response = await fetch(`${host}/api/notes/featchallnotes`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTU3ZWVmMDlhZTBlMjYyMzRjNDcwIn0sImlhdCI6MTY3NDQ2NzMxMH0.2rkB8eMa1UIpGb1mVTpA7t1KVAsQpg1XRgDywBTcMBQ'
                
              },
          });
          const json = await response.json()
          console.log(json)
        }
          
          
          //Add a Note
          const addNote = async (title,description,tag) => {
            //TODO API call
            const response = await fetch(`${host}/api/notes/addnotes`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6'
                
              },
               body: JSON.stringify({title,description,tag}) 
            });
 

            console.log("adding a new note")
            const note = {
              "_id": "63cfb4efe9f7b3d396bdafd1",
              "user": "63ce57eef09ae0e26234c470",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2023-01-24T10:37:35.717Z",
              "__v": 0
            }

            setNotes(notes.concat(note))

          }


          //Delete a Note
          const deleteNote = (id) => {
            console.log("deleting the note with id"+id)
            const newNotes = notes.filter((notes)=>{return notes._id!==id})
            setNotes(newNotes)
            
          }
          //Edit a NOte
          const editNote =async (id,title,description,tag) => {
            //API call
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6'
                
              },
               body: JSON.stringify(title,description,tag) 
            });
           const json = response.json(); 
          
            for (let index = 0; index < notes.length; index++) {
              const element = notes[index];
              if(element._id=== id){
                element.title = title;
                element.description = description;
                element.tag = tag;
              }
              
            }
            
          }
    
    
    return (
        <NoteContext.Provider value={{notes,setNotes,deleteNote,addNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState