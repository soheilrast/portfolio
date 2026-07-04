import {
  FaUserGraduate,
  FaFolderOpen,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import pro from "../assets/ask2.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const infos = [
    { icon: <FaUserGraduate />, title: "Experience", value: "3+ Years" },
    { icon: <FaFolderOpen />, title: "Projects", value: "6+ Completed" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Gilan, Rasht" },
    { icon: <FaEnvelope />, title: "Email", value: "s0heil.r20000@gmail.com" },
  ];

const backgrounds = [
  "absolute left-10 top-24 w-48 h-48 bg-pink-500/20 blur-2xl rounded-full max-[458px]:left-[-80px] max-[458px]:top-10",

  "absolute left-1/3 top-1/2 w-36 h-36 bg-purple-500/20 blur-xl rounded-full max-[458px]:left-1/2",

  "absolute right-10 bottom-20 w-60 h-60 bg-gradient-to-tr from-pink-500/15 to-purple-500/15 blur-2xl rounded-full max-[458px]:right-0",
];


  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-17 pb-10 px-6"
    >
   
     {backgrounds.map((cls, i) => (
  <div
    key={i}
    className={`${cls} max-[458px]:opacity-50 max-[458px]:scale-75`}
  />
))}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 md:flex-row">

        
        <motion.div
          className="order-last flex flex-1 flex-col items-center justify-center text-center md:order-first md:items-start md:text-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ amount: 0.3 }}
        >
          <span className="font-semibold uppercase tracking-widest text-pink-400">
            About Me
          </span>

<h2 className="
mt-5
  text-4xl
  max-[1046px]:text-3xl
 
  max-[966px]:text-3xl

  max-[891px]:text-2xl
  max-[590px]:text-[25px]
  leading-tight
  font-bold
  text-white
">
            Crafting digital experiences <br />
            with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              clean code
            </span>{" "}
            and creativity.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-white/70 font-medium">
            I'm a Front-end Developer passionate about creating smooth user experiences and clean, maintainable interfaces. I enjoy turning ideas into fast, responsive and accessible web applications.
          </p>

         
          <div className="mt-10 flex w-fit flex-col gap-5 self-center md:self-start">
            {infos.map((item) => (
              <div key={item.title} className="flex items-center gap-4 font-medium">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-pink-400">
                  {item.icon}
                </div>

                <div className="text-left">
                  <h4 className="text-sm text-white/60">{item.title}</h4>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

       
        <motion.div
          ref={imageRef}
          style={{ y }}
          className="order-first flex flex-1 items-center justify-center md:order-last"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="relative">

     
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-pink-500/20 blur-[100px]" />
            <div className="absolute -right-12 bottom-10 h-52 w-52 rounded-full bg-purple-500/20 blur-[100px]" />

            
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />

            
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -left-8 md:-left-10 lg:-left-16 top-8 md:top-10 lg:top-12 z-20 rounded-xl lg:rounded-2xl border border-white/10 bg-[#18181b]/80 px-3 py-2 lg:px-5 lg:py-4 backdrop-blur-xl shadow-xl"
            >
             <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-pink-400">3+</h3>
              <p className="mt-1 text-sm text-white/60 font-medium">Years Experience</p>
            </motion.div>

 
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -right-8 md:-right-10 lg:-right-16 bottom-10 md:bottom-16 lg:bottom-24 z-20 rounded-xl lg:rounded-2xl border border-white/10 bg-[#18181b]/80 px-3 py-2 lg:px-5 lg:py-4 backdrop-blur-xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-purple-400">6+</h3>
              <p className="mt-1 text-[10px] md:text-xs lg:text-sm text-white/60 font-medium">Projects</p>
            </motion.div>

          
           <motion.div
  whileHover={{ scale: 1.03, rotate: 1 }}
  transition={{ duration: 0.4 }}
 className="relative w-[270px] md:w-[300px] lg:w-[360px] rounded-[36px] border border-white/10 bg-white/5 p-4 lg:p-5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]"
>
              <div className="rounded-[28px] bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-[2px]">
                <div className="overflow-hidden rounded-[26px] bg-[#111827]">
                  <img
  src={pro}
  alt="Developer"
 className="h-[320px] md:h-[360px] lg:h-[420px] w-full object-cover transition duration-700 hover:scale-110"
/>
                </div>
              </div>

              
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-2xl border border-white/10 bg-[#18181b]/80 px-4 py-3 backdrop-blur-xl">
                <span className="rounded-full font-medium bg-pink-500/20 px-3 py-1 text-xs text-pink-300">
                  React
                </span>
                <span className="rounded-full font-medium bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                  Tailwind
                </span>
                <span className="rounded-full font-medium bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                  JavaScript
                </span>
              </div>

              
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 top-1/4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-2xl"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              
              <div className="absolute -left-6 bottom-18 h-20 w-20 rounded-full border border-pink-500/20 bg-pink-500/10 backdrop-blur-xl" />
              <div className="absolute -right-4 top-20 h-6 w-6 rounded-full bg-pink-500" />
              <div className="absolute left-10 bottom-28 h-4 w-4 rounded-full bg-purple-500" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}