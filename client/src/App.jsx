import EditorPage from "./components/EditorPage";
import Home from "./components/Home"
import {Routes,Route} from "react-router-dom";
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster position="top-center"></Toaster>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/editor/:roomid" element={<EditorPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
