import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Voter Registration System",
    description: "A Java Swing desktop application for secure voter data management with Oracle database integration.",
    tech: ["Java Swing", "Oracle 21c", "JDBC", "Desktop App"],
    features: [
      "Secure voter data storage",
      "CRUD operations with JDBC",
      "User-friendly GUI interface",
    ],
    github: "https://github.com/shambhavii12/CollegeProject",
    icon: Database,
  },
  {
    title: "Employee Management Form",
    description: "A web-based CRUD application for employee management with REST API integration using JsonPowerDB.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "JsonPowerDB"],
    features: [
      "Complete CRUD functionality",
      "REST API based operations",
      "Responsive web interface",
    ],
    github: "https://github.com/shambhavii12/EmployeeForm",
    icon: Globe,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover-lift border border-border/50"
            >
              {/* Project Header */}
              <div className="p-6 gradient-bg">
                <div className="w-14 h-14 bg-primary-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <project.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Details
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
