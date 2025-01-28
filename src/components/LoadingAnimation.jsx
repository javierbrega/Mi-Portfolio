import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import "../styles/LoadingAnimation.css"

const LoadingAnimation = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const dotsRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Smoke particles with better distribution
    const smokeParticles = []
    const textureLoader = new THREE.TextureLoader()
    const smokeTexture = textureLoader.load("/smoke.png")

    const smokeMaterial = new THREE.MeshStandardMaterial({
      map: smokeTexture,
      transparent: true,
      opacity: 0.3,
      emissive: new THREE.Color("#FF8700"),
      emissiveIntensity: 0.5,
    })

    // Create smoke particles with better spacing
    for (let i = 0; i < 50; i++) {
      const smokeGeo = new THREE.PlaneGeometry(30, 30)
      const smokeMesh = new THREE.Mesh(smokeGeo, smokeMaterial)

      // Distribute particles more evenly across the screen
      smokeMesh.position.set(
        Math.random() * window.innerWidth - window.innerWidth / 2,
        Math.random() * window.innerHeight - window.innerHeight / 2,
        Math.random() * 50 - 25,
      )
      smokeMesh.rotation.z = Math.random() * 360
      smokeParticles.push({
        mesh: smokeMesh,
        speed: Math.random() * 0.2 + 0.1,
        rotationSpeed: Math.random() * 0.001,
      })
      scene.add(smokeMesh)
    }

    // Lighting
    const light = new THREE.PointLight("#FF8700", 1, 100)
    light.position.set(0, 0, 0)
    scene.add(light)

    camera.position.z = 100

    // Loading dots animation
    const dots = dotsRef.current
    let dotCount = 0

    const updateDots = () => {
      dotCount = (dotCount + 1) % 4
      if (dots) {
        dots.textContent = ".".repeat(dotCount)
      }
    }

    const dotsInterval = setInterval(updateDots, 500)

    // Smoke animation
    const animate = () => {
      smokeParticles.forEach((particle) => {
        particle.mesh.rotation.z += particle.rotationSpeed
        particle.mesh.position.y += particle.speed

        // Reset position when particle goes off screen
        if (particle.mesh.position.y > window.innerHeight / 2 + 50) {
          particle.mesh.position.y = -window.innerHeight / 2 - 50
        }
      })

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement)
      renderer.dispose()
      clearInterval(dotsInterval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="loading-container">
      <div ref={containerRef} className="smoke-container"></div>
      <div className="loading-content">
        <div ref={textRef} className="loading-text">
          LOADING<span ref={dotsRef} className="loading-dots"></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation

