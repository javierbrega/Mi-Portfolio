// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import "../styles/LoadingAnimation.css";

const LoadingAnimation = () => {
  const textRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    // Loading dots animation
    const dots = dotsRef.current;
    let dotCount = 0;

    const updateDots = () => {
      dotCount = (dotCount + 1) % 4;
      if (dots) {
        dots.textContent = ".".repeat(dotCount);
      }
    };

    const dotsInterval = setInterval(updateDots, 500);

    // Cleanup
    return () => {
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="loading-container">
      <video autoPlay loop muted className="background-video">
        <source src="src\assets\loading-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="loading-content">
        <div ref={textRef} className="loading-text">
          LOADING<span ref={dotsRef} className="loading-dots"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;