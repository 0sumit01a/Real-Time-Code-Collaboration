import React, { useState } from 'react'
import Client from './Client'
import Editor from './Editor'

function EditorPage() {
  const [clients,setClients] = useState([
    {
      socketId:1,
      username:"Sumit"
    },
    {
      socketId:2,
      username:"Mohit"
    },
  ])
  return (
    <div className='container-fluid vh-100 d-flex flex-column'>
      <div className="row flex-grow-1">
        <div className="col-md-2 bg-dark text-light d-flex flex-column h-100" style={{boxShadow:"2px 0px 4px rgba(0,0,0,0.1)"}}>
          <img 
          src="/images/codecast.png" 
          alt="CodeCast" 
          className='img-fluid mx-auto'
          style={{maxWidth:"150px", marginTop:"-43px" }}
          />
          <hr style={{marginTop:"-3rem"}} />
          {/* Client  lost container */}
          <div className="d-flex flex-column flex-grow-1 overflow-auto">
            { clients.map((client) => (
              <Client key={client.socketId} username ={client.username} />
            ))}
          </div>
            <hr />
          {/* buttons */}
          <div className="mt-auto">
            <div className="btn btn-success">
              Copy Room Id
            </div>
            <button className="btn btn-danger mt-2 mb-3 px-3 btn-block" >
              Leave Room
            </button>
          </div>
        </div>
        {/* Editor */}
        <div className="col-md-10 text-light d-flex flex-column h-100">
          <Editor/>
        </div>
         </div>
    </div>
  )
}

export default EditorPage
