import React, { useState } from 'react'
import{toast} from 'react-hot-toast'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomid, setRoomid] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate()

  const generateRoomId = (e) => {
    e.preventDefault();
    const id =  uuid()
    setRoomid(id);
    toast.success('Room ID generated successfully')
  };

  const joinRoom = () => {
    if(!roomid || !username){
      toast.error('Please fill all fields')
      return
    }
    // redirect to editor page
    navigate(`/editor/${roomid}`,{
      state:{username},
    })
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
            <div className="card-body text-center bg-dark">
              <img
                src="/images/codecast.png"
                alt="Logo"
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "150px" }}
              />
               <h4 className="card-title text-light mb-4">Enter the ROOM ID</h4>
                <div className="form-group">
                  <input type="text"
                    value={roomid}
                    onChange={(e)=>setRoomid(e.target.value)}
                    className='form-control mb-2 ' 
                    placeholder='Room Id' />
                </div>
                <div className="form-group">
                  <input value={username} 
                  onChange={(e)=>setUsername(e.target.value)}
                   type="text"
                   className='form-control mb-2 ' 
                   placeholder='USERNAME' />
                </div>
                <button
                onClick={joinRoom}
                className="btn btn-success btn-lg btn-block">
                JOIN
              </button>
              <p className="mt-3 text-light">
                Don't have a room ID? create{" "}
                <span
                  className=" text-success p-2"
                  style={{ cursor: "pointer" }}
                  onClick={generateRoomId}
                >
                  {" "}
                  New Room
                </span>
              </p>
              </div>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Home
