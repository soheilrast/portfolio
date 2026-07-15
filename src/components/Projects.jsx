import React, { useState } from "react";
import { motion } from "framer-motion";

import pic1 from "../assets/img1.webp";
import pic2 from "../assets/img2.webp";
import pic3 from "../assets/img3.webp";
import pic4 from "../assets/img4.webp";
import pic5 from "../assets/img5.webp";
import pic6 from "../assets/img6.webp";

const projects = [
  {
    title: "Admin Dashboard",
    image: pic2,
    tags: ["React", "Tailwind", "Chart.js"],
    description:
      "Admin panel for managing users, viewing analytics, and handling system settings in one unified interface.",
    github: "https://github.com/soheilrast/admin-panel-react",
  },
  {
    title: "E-Commerce Website",
    image: pic1,
    tags: ["React", "Tailwind"],
    description:
      "Online shopping platform with product browsing, cart management, and a smooth checkout experience.",
    github: null,
  },
  {
    title: "Medical Clinic Website",
    image: pic3,
    tags: ["React", "Bootstrap"],
    description:
      "Clinic website for showcasing medical services and enabling online appointment booking.",
    github: null,
  },
  {
    title: "CRM Dashboard",
    image: pic4,
    tags: ["React", "Bootstrap"],
    description:
      "Dashboard for tracking customers, managing orders, and monitoring business performance in real time.",
    github: null,
  },
  {
    title: "Gym Landing Page",
    image: pic5,
    tags: ["React", "Tailwind"],
    description:
      "Fitness landing page with membership plans, trainer profiles, and clear call-to-action sections to boost sign-ups.",
    github: null,
  },
  {
    title: "Shopping Landing Page",
    image: pic6,
    tags: ["React", "Bootstrap"],
    description:
      "Online headphone store featuring product showcases, special deals, and promotional offers designed to drive conversions.",
    github: null,
  },
];


const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const titleVariant = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative w-full pt-18 mb-5 px-4 bg-[#0a0a0a] overflow-hidden">

  
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 w-60 h-60 bg-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-8 bottom-30 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

       
        <motion.div
          initial="hidden"
          whileInView="visible"
         viewport={{
  once: false,
  amount: 0.3,
}}
          className="mb-10"
        >
          <motion.p
            variants={titleVariant}
            className="
              text-lg font-bold
              bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
              bg-clip-text text-transparent
              tracking-wider
            "
          >
            MY PROJECTS
          </motion.p>

          <motion.h2
            variants={titleVariant}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mt-2"
          >
            Things I've built
          </motion.h2>

          
        </motion.div>


        <motion.div
  className="flex flex-wrap gap-4 mb-5 justify-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
  once: false,
  amount: 0.15,
}}
        >
       {projects.map((project, index) => (
  <motion.div
    key={index}
    variants={cardVariant}
    whileHover={{
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
  className="relative group rounded-2xl w-full min-[500px]:w-[48%] lg:w-[31%]"
  >
          
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-70 blur-sm transition duration-300" />

      
              <div
  className="
    relative rounded-2xl overflow-hidden
    bg-white/10
    backdrop-blur-xl
    border border-white/15
    transition-all duration-700 ease-out
    group-hover:-translate-y-1
    group-hover:bg-white/15
  "
>

              
                <div className="h-36 overflow-hidden">
                  <img
                  fetchPriority="high"
                    src={project.image}
                    loading="lazy"
                    alt={project.title}
                    onClick={() => setSelectedImage(project.image)}
                    className="
                      w-full h-full object-cover
                     transition-transform duration-700 ease-out
                      group-hover:scale-105
                      cursor-pointer
                    "
                  />
                </div>

     
                <div className="p-4">
                  <h3 className="text-white font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2 font-medium">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white/10 px-2 py-1 rounded-md text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

<p className="text-xs text-gray-300 font-medium mt-2 h-[60px] line-clamp-3">
  {project.description}
</p>


<div className="flex mt-4">
  {project.github ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center font-medium text-white text-xs py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
    >
      GitHub
    </a>
  ) : (
    <div className="flex-1">
      <div className="text-center font-medium text-white/30 text-xs py-2 rounded-lg border border-white/10 bg-white/5 ">
        Coming Soon
      </div>
    </div>
  )}
</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

 
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}