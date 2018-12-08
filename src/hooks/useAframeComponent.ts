import { useLayoutEffect } from "react";
import { ComponentDefinition } from "aframe";

function useAframeComponent<T extends object>(
  name: string,
  component: ComponentDefinition<T>
) {
  useLayoutEffect(() => {
    // we need to check if the component is already registered, otherwise A-Frame will throw an error
    if (!AFRAME.components[name]) {
      AFRAME.registerComponent(name, component);
    }
  });
}

export default useAframeComponent;
