import React, { useState } from "react";
import useAframeComponent from "./hooks/useAframeComponent";

function App() {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  useAframeComponent("scale-on-mouseenter", {
    init: function() {
      const element = this.el!;
      element.addEventListener("mouseenter", () => setIsMouseEntered(true));
      element.addEventListener("mouseleave", () => setIsMouseEntered(false));
    }
  });

  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img
            id="boxTexture"
            src="https://cdn-images-1.medium.com/max/800/1*TPttZ5-4YcUetNoJ1xLxGg.jpeg"
          />
        </a-assets>
        <a-box
          src="#boxTexture"
          position="0 2 -5"
          rotation="0 25 25"
          scale={isMouseEntered ? `2.2 2.2 2.2` : `2 2 2`}
          color={isMouseEntered ? `gray` : ``}
          scale-on-mouseenter
        >
          <a-animation
            attribute="position"
            to="0 2.2 -5"
            direction="alternate"
            dur="2000"
            repeat="indefinite"
          />
        </a-box>
        <a-camera>
          <a-cursor />
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
