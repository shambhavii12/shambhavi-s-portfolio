import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Twitter, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shambhavi-das-4b5988264",
    icon: Linkedin,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    url: "https://github.com/shambhavii12",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/shambhavii12",
    icon: Twitter,
    color: "hover:text-foreground",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shambhavii12_/",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Discord",
    url: "https://discord.gg/sqdqCBtr",
    icon: MessageCircle,
    color: "hover:text-[#5865F2]",
  },
];

export function SocialLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find me on social media and let's build something together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Button
                variant="social"
                size="iconLg"
                asChild
                className={`rounded-xl ${social.color}`}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
