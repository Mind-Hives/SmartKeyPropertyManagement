import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToSection = () => {
      const element = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;