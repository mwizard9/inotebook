import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
    const state = {
        "name": "Manish",
        "class": "xii"
    }
    return(
        <noteContext.provider value ={state}>
            {props.children}
        </noteContext.provider>
    )
}