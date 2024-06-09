//base
import Home from "./base/home"
import About from "./base/about"
import Project from "./base/project"
import Error from "./base/error"
import Contact from "./base/contact"

//component
import NavBar from "./components/navigation_bar"
import Footer from "./components/footer"

//react-router
import { Route, Routes, HashRouter } from "react-router-dom"

function App() {
  return (
    <HashRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>

      </Routes>

      <Footer/>

    </HashRouter>
  )
}

export default App
