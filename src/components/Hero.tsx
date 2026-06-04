import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/profile_picture_bw.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        {/* Profile image */}
        <motion.img
          src={profilePic}
          alt="Profile picture"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-4 w-82 h-82 object-cover rounded-2xl grayscale"
        />

        {/* Cursive text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3 text-sm italic text-gray-500 font-serif"
        >
          "Always ready for a cup of coffee"
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-roboto text-4xl md:text-6xl mb-6 tracking-tight"
        >
          Jordan Goedbloed
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-roboto text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-500"
        >
          Student at Hogeschool Rotterdam. Crafting digital experiences with
          thoughtful design and clean code.
        </motion.p>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="font-roboto text-sm text-gray-500 tracking-widest uppercase"
        >
          <TypeAnimation
            sequence={[
              "Based in Rotterdam",
              2000,
              "",
              1000,
              "Based in Rotterdam",
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
      </div>
    </section>
  );
}
