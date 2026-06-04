export default function Skills() {
    const skillCategories = [
      {
        title: "Frontend",
        skills: ["React", "Vuejs", "Typescript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        skills: ["Node.js", "PHP", "Laravel", "Python", "MongoDB"],
      },
      {
        title: "Tools & Others",
        skills: ["Git","Figma", "Photoshop", "Excel", ],
      },
    ];
return (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl mb-16 text-center">Skills</h2>
      <div className="grid md:grid-cols-3 gap-12 text-center">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-lg">{category.title}</h3>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
