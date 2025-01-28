import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Works from "./components/Works"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import Study from "./components/Study"
import Footer from "./components/Footer"
import LoadingAnimation from "./components/LoadingAnimation"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload smoke texture
    const smokeTexture = new Image()
    smokeTexture.src = "/smoke.png"

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000) // 7 seconds for a more dramatic effect

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Services />
            <Works />
            <Resume />
            <Skills />
            <Study />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

