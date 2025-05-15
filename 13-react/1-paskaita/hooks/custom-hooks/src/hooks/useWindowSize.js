import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const deviceName = (width) => {
    if (width <= 600) return "mobile";
    if (width > 600 && width <= 1200) return "tablet";
    return "desktop";
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);
  return { ...size, deviceName };
};

export default useWindowSize;
