import React, { useState, useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todolist(props) {
  const[isMouseover,setIsMouseOver] = useState(false);
  const { Theme } = useContext(ThemeContext);

  return (
    <div 
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={()=>{setIsMouseOver(true)}}
      onMouseOut={()=>{setIsMouseOver(false)}}
    >
      <span 
        className="me-auto"
        style={props.completed ? {textDecoration: "line-through",color: Theme.foreground} : {color: Theme.foreground}}
      >{props.title}</span>
      {
        isMouseover &&
        <>
          <button 
            className="btn btn-success"
            onClick={() => props.onMark()}
          >
            <IconCheck />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => props.onMoveUp()}
          >
            <IconArrowUp />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => props.onMoveDown()}
          >
            <IconArrowDown />
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => props.onDelete()}
          >
            <IconTrash />
          </button>
        </>
      }
    </div>
  )
}
