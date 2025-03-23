import EditorPage from "./components/EditorPage";
import Home from "./components/Home"
import {Routes,Route} from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/editor/:roomid" element={<EditorPage/>}></Route>
    </Routes>
  )
}

export default App
