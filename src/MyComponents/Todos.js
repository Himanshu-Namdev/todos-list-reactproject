import React from 'react'
import Todo from'../MyComponents/Todo';
export default function Todos(props) {
  
  return (
    <div className="container" >
        <h3 className="my-3" >Todos List</h3>

        {props.Data.length===0 ? "No Todos to Display":props.Data.map((i)=>{
            return <Todo todo={i} onDelete={props.onDelete}/>
        })
        }
        
    </div>
  )
}
