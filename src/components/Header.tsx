import { animate, stagger, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // stagger in nav items on mount
    animate(
      ".nav-item",
      { y: 0, opacity: 1 },
      { delay: stagger(0.08), duration: 0.5, ease: "easeOut" }
    );

    // hide on scroll down, show on scroll up
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const movedEnough = Math.abs(y - lastY.current) > 10;

      if (movedEnough) {
        if (goingDown && y > 80) setHidden(true);
        if (!goingDown) setHidden(false);
        lastY.current = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-4 z-50"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-14 items-center justify-between rounded-full border border-gray-200 bg-white/90 px-4 backdrop-blur shadow-md">
          {/* Left: name */}
          <a
            href="/"
            className="nav-item opacity-0 will-change-transform flex items-center gap-3"
          >
            <span className="text-sm font-medium text-gray-900">
              Jordan Goedbloed
            </span>
          </a>

          {/* Right: navigation */}
          <ul className="flex items-center gap-2">
            <li className="nav-item opacity-0 will-change-transform">
              <a
                href="#projects"
                className="rounded-full px-3 py-1 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Projects
              </a>
            </li>

            <li className="nav-item opacity-0 will-change-transform">
              <a
                href="#skills"
                className="rounded-full px-3 py-1 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;


