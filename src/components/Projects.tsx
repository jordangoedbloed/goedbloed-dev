import websiteGif from "../assets/website.gif";
import mockupImg from "../assets/Mockup_1.png";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "Het Groene Knooppunt",
      year: "2025",
      description:
        "A web application designed for the Gemeente Rotterdam, made and designed with Figma, React, Typescript, Vite and TailwindCSS. With this application, you can find observations about animals in Rotterdam.",
      images: [
        {
          src: websiteGif,
          alt: "gif desktop interface",
        },
        {
          src: mockupImg,
          alt: "desktop mockup",
        },
      ],
      tech: ["React", "Typescript", "Vite", "TailwindCSS"],
      github: "https://github.com/Gindeldado/sem6_vonk3",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl mb-16 text-center">Selected Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl">{project.title}</h3>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 ">
                  <a
                    href={project.github}
                    className="rounded-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Media layout */}
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr] items-stretch">
                {/* Left: GIF */}
                <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100 overflow-hidden">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right: Mobile */}
                <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100 overflow-hidden flex items-center justify-center">
                  <div className="w-[620px] sm:w-[660px]">
                    <img
                      src={project.images[1].src}
                      alt={project.images[1].alt}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Tech */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
