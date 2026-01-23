import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "SDE Intern & HR Technical Intern",
    company: "Login2Xplore",
    period: "March 2025 – Present",
    type: "work",
    responsibilities: [
      "Bug fixing and application improvements",
      "CRUD operations using JsonPowerDB",
      "REST API development, testing & debugging",
      "LMS (Moodle) development & maintenance",
      "Talent acquisition & HR analytics",
    ],
  },
  {
    title: "Java Home Tutor",
    company: "Freelance",
    period: "2021 – Present",
    type: "teaching",
    responsibilities: [
      "Teaching Java programming and Object-Oriented Programming",
      "DSA concepts and problem-solving techniques",
      "Project guidance and debugging assistance",
      "Mentoring students for technical interviews",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full gradient-bg ring-4 ring-background" />

              <div className="glass-card p-6 rounded-2xl hover-lift border border-border/50">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      {exp.type === "work" ? <Building2 size={16} /> : <GraduationCap size={16} />}
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + respIndex * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
