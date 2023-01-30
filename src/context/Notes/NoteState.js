import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = 
        [
            {
              "_id": "63ce5813f09ae0e26234c474",
              "user": "63ce57eef09ae0e26234c470",
              "title": "any Title",
              "description": "this is my note",
              "tag": "personal",
              "date": "2023-01-23T09:49:07.513Z",
              "__v": 0
            },
            {
              "_id": "63ce581ff09ae0e26234c476",
              "user": "63ce57eef09ae0e26234c470",
              "title": "my Title",
              "description": "this is my note",
              "tag": "personal",
              "date": "2023-01-23T09:49:19.273Z",
              "__v": 0
            },
            {
              "_id": "63ce5820f09ae0e26234c478",
              "user": "63ce57eef09ae0e26234c470",
              "title": "my Title",
              "description": "this is my note",
              "tag": "personal",
              "date": "2023-01-23T09:49:20.615Z",
              "__v": 0
            },
            {
              "_id": "63cfb4efe9f7b3d396bdafd1",
              "user": "63ce57eef09ae0e26234c470",
              "title": "my Title",
              "description": "this is my note",
              "tag": "personal",
              "date": "2023-01-24T10:37:35.717Z",
              "__v": 0
            }
          ]
          const [notes,setNotes] =useState(notesInitial)
          //TODO API call
          
          //Add a Note
          const addNote = (title,description,tag) => {
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
          const deleteNote = () => {
            
          }
          //Edit a NOte
          const editNote = () => {
            
          }
    
    
    return (
        <NoteContext.Provider value={{notes,setNotes,deleteNote,addNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState