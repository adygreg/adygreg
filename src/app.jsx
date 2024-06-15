import { HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/nav"

import Home from "./pages/base/home";
import About from "./pages/base/about";
import Design from "./pages/base/design";
import Art from "./pages/base/art";
import Project from "./pages/base/project";
import Contact from "./pages/base/contact";

import IGreg from "/src/pages/article/igreg.jsx";

function App() {

  return (
    <div className="root__container flex justify-center min-h-screen">
      <div className="main__container flex-col gap-5 p-6 w-3/4 hidden md:flex">

        <HashRouter>

          <Navigation />

          <div className="inner__container not-style p-4 h-full rounded-xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/design" element={<Design />} />
              <Route path="/art" element={<Art />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/igreg" element={<IGreg />} />
            </Routes>
          </div>

        </HashRouter>

      </div>

      <div className="main__container flex justify-center items-center p-6 md:hidden">
        <h1>Unfortunately this website is accessible for larger devices.</h1>
      </div>
    </div>
  );
}

export default App
