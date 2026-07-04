import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "Git & GitHub", icon: FaGithub, color: "text-white" },
];

export default function Skills() {
  const sectionRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  
  const backgrounds = [
    "absolute left-10 top-24 w-56 h-56 bg-pink-500/20 blur-2xl rounded-full",
    "absolute left-1/3 top-1/2 w-40 h-40 bg-purple-500/20 blur-xl rounded-full",
    "absolute right-10 bottom-10 w-64 h-64 bg-gradient-to-tr from-pink-500/15 to-purple-500/15 blur-2xl rounded-full",
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden min-h-[80vh] pt-10 pb-10 px-6"
    >
     
      <motion.div style={{ y: y1 }} className={backgrounds[0]} />
      <motion.div style={{ y: y2 }} className={backgrounds[1]} />
      <motion.div style={{ y: y3 }} className={backgrounds[2]} />

    
      
     
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3 }}
        className="relative text-center"
      >
        <p className="font-semibold uppercase tracking-widest text-pink-400 mt-10">
          My Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white  md:text-5xl">
          Technologies{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            I work with
          </span>
        </h2>
      </motion.div>


     <div className="relative mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {skills.map((skill, index) => {
    const Icon = skill.icon;

    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.07,
        }}
        viewport={{ amount: 0.3, once: false }}
        whileHover={{ y: -10, scale: 1.05 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/70 p-8 backdrop-blur-xl"
      >
        {/* Hover Background */}
        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-purple-500/10 blur-xl" />
        </div>

        {/* Icon */}
        <div className="relative flex justify-center">
          <Icon
            className={`text-6xl ${skill.color} transition duration-300 group-hover:scale-125 group-hover:rotate-6`}
          />
        </div>

        {/* Title */}
        <h3 className="relative mt-8 text-center text-lg font-medium text-white">
          {skill.name}
        </h3>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
      </motion.div>
    );
  })}
</div>
    </section>
  );
}