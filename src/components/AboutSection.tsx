import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Heart } from "lucide-react";

const aboutItems = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "BCA Graduate with strong foundation in computer science fundamentals",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "SDE Intern & HR Technical Intern at Login2Xplore (11+ months)",
  },
  {
    icon: Code,
    title: "Expertise",
    description: "API Development, Debugging & Testing, JsonPowerDB, Java, C#, Web",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "4+ years of Java home tutoring, helping students master programming",
  },
];

const interests = [
  "Full Stack Development",
  "Backend Engineering",
  "AI & Machine Learning",
  "System Design",
  "Problem Solving",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating impactful solutions and continuously learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 rounded-2xl border border-border/50"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Interests & Goals</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
