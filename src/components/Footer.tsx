import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        {/* Icons */}
        <div className="flex gap-6 text-gray-500">
          <a
            href="https://github.com/jordangoedbloed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-gray-200 transition-colors"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/jordan-goedbloed-2a7a11157/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/j.gbloed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright text */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Jordan Goedbloed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
