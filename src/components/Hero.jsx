import profile from "../assets/ask.webp";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Hero() {
  const backgrounds = [
    "absolute left-[-120px] top-20 w-[500px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full",
    "absolute left-[100px] top-40 w-[250px] h-[250px] bg-purple-500/20 blur-[100px] rounded-full",
    "absolute right-[-120px] bottom-[-100px] w-[500px] h-[450px] bg-gradient-to-tr from-pink-500/30 to-purple-500/20 blur-3xl rounded-full",
  ];

  const buttons = [
    {
      title: "View my Work",
      primary: true,
      action: "projects",
    },
    {
      title: "Contact Me",
      primary: false,
      action: "contact",
    },
  ];

  const socials = [
    {
      name: "Github",
      href: "https://github.com/soheilrast/",
      icon: <FaGithub />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/soheilrastari/",
      icon: <FaLinkedin />,
      color: "hover:text-blue-400",
    },
    {
      name: "Telegram",
      href: "https://t.me/s0heil_ri",
      icon: <FaTelegramPlane />,
      color: "hover:text-sky-400",
    },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home">
      <section className="relative pt-32 mb-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Backgrounds */}
        {backgrounds.map((bg, index) => (
          <div key={index} className={bg} />
        ))}

        {/* TEXT */}
        <div className="relative flex-1 min-w-0 text-center lg:text-left z-10">

  <p className="text-gray-400 font-medium mb-2">
    Hi, my name is 👋
  </p>

<div className="leading-tight">

  <h1 className="text-4xl md:text-6xl font-bold text-white">
    Soheil Rastari
  </h1>

  <h2 className="mt-2 text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text md:whitespace-nowrap">
    Front-end Developer
  </h2>

</div>

  <p className="mt-4 text-gray-400 leading-7 max-w-xl lg:max-w-md mx-auto lg:mx-0 font-medium">
  
    I build modern, responsive, and user-focused web applications using React, JavaScript, and Tailwind CSS.
  </p>

  {/* Buttons */}
  <div className="mt-6 flex gap-4 justify-center lg:justify-start flex-wrap">
    {buttons.map((button) => (
      <button
        key={button.title}
        onClick={() => handleScroll(button.action)}
        className={`px-6 py-3 rounded-lg transition text-white font-medium cursor-pointer ${
          button.primary
            ? "bg-pink-500 hover:bg-pink-600"
            : "border border-white/20 hover:bg-white/10"
        }`}
      >
        {button.title}
      </button>
    ))}
  </div>

  {/* Social Links */}
  <div className="mt-8 flex gap-6 justify-center lg:justify-start text-gray-200">
    {socials.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className={`
          group relative
          flex items-center justify-center
          w-11 h-11
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          transition-all duration-300 ease-out
          hover:scale-110 hover:-translate-y-1
          hover:bg-white/10 hover:shadow-lg
          ${social.color}
        `}
      >
        {social.icon}
      </a>
    ))}
  </div>

</div>

        {/* IMAGE */}
        <div className="relative flex-1 flex justify-center z-10">

          {/* Glow */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-pink-500/30 blur-3xl rounded-full" />

          <div className="relative">

            {/* Gradient Border */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500">
              <img
                src={profile}
                  fetchPriority="high"
                alt="Soheil Rastari"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Code Icon */}
            <div className="absolute -top-4 -right-4 bg-[#111] border border-sky-600 rounded-xl p-3 shadow-lg">
              <span className="text-sky-400 text-xl">{`</>`}</span>
            </div>

            {/* Orbit */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] border border-white/10 rounded-full animate-pulse" />
            </div>

            {/* Code Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0f0f0f] border border-white/10 rounded-xl p-3 w-48 shadow-xl">
              <div className="space-y-2">
                <div className="h-2 w-20 bg-pink-500/70 rounded" />
                <div className="h-2 w-32 bg-purple-500/60 rounded" />
                <div className="h-2 w-16 bg-blue-500/50 rounded" />
              </div>
            </div>

          </div>
        </div>

      </section>
    </section>
  );
}