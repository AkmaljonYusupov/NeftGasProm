import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from './components/page/About'
import Contact from './components/page/Contact'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App