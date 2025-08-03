import Landing from "./pages/Landing"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ResumeUpload from "./pages/ResumeUpload"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume" element={<ResumeUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
