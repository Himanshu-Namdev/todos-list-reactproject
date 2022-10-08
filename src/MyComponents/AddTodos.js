import React, { useState } from 'react'

export default function AddTodos(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit = (e)=>
    {
        e.preventDefault();
        if(!title||!desc){
            window.alert("Title or Desription can not be blanked");
        }
        else 
        {
            props.addTodos(title,desc);
            setDesc("");
            setTitle("");
        }
    }
    return (

        <div className='container'>
            <h3 className="my-3">Add Todos</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="button" className="btn-sm btn-success" onClick={submit}>Add todo</button>
            </form>
        </div>
    )
}
