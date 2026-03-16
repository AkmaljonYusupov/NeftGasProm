import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/page/About"
import Contact from "./components/page/Contact"
import Products from './components/page/Products'
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
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

        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App