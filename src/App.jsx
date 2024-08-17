import Home from "./Layout/Home";
import About from "./Layout/About"
import Footer from "./Components/Footer";
import "./Styles/style.css"
import Navbar from "./Components/Navbar";
import Career from "./Layout/Career";
import Location from "./Layout/Location";
import Sidebar from "./Components/Sidebar";
import Errorpage from "./Layout/Errorpage";
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";





function App() {
  const [SideBar, setSideBar] = useState(false)
  const navBarHEIGHTRef = useRef(null)
  const SideBarRef = useRef(null)
  const handleClick = () => {
     SideBarRef.current.style.top = navBarHEIGHTRef.current.offsetHeight+ "px"
    setSideBar(value => !value)
  }
  useEffect(() => {
    if (SideBar) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
    return () => {
      document.body.style.overflowY = "scroll"
    }
  }, [SideBar])

  return (
    <>
    <Navbar ref={navBarHEIGHTRef} onhandleClick={handleClick} isOpen={SideBar} />
    <Sidebar openAside={SideBar} ref={SideBarRef}/>
    <div className={SideBar ? "page" : ""}>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career/>} />
          <Route path="/location" element={<Location />} />
          <Route path="/*" element = {<Errorpage/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;



