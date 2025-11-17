import { useEffect, useState } from "react";

export default function useScrollNavbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 0) {
        setVisible(true);
        return;
      }

      if (current > lastScrollY) {
        setVisible(false);
        clearTimeout(timeout);
        timeout = setTimeout(() => setVisible(false), 150);
      } else {
        setVisible(true);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}
