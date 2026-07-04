import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

      
       <div
  onClick={() => scrollToSection("home")}
  className="
    text-2xl md:text-3xl font-black
    cursor-pointer select-none
    tracking-tight
    transition-all duration-300
    hover:scale-105 active:scale-95
  "
>
 <span className="text-white">Soheil</span>
<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
  Dev
</span>
</div>


     
        <ul className="hidden md:flex gap-8 text-gray-300">
        {menuItems.map((item) => (
  <li
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className="hover:text-pink-400 cursor-pointer font-medium"
  >
    {item.name}
  </li>
))}
        </ul>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <span
            className={`absolute text-2xl transition-all bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
            }`}
          >
            ☰
          </span>

          <span
            className={`absolute text-2xl transition-all bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text duration-300 ${
              open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          >
            ✕
          </span>
        </button>
      </div>

   
      <div
        className={`md:hidden overflow-hidden bg-black/20 border-t border-white/10 transition-all duration-300 ${
          open ? "max-h-72 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4 text-gray-300 font-medium">
         {menuItems.map((item) => (
  <span
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className="hover:text-pink-400 cursor-pointer"
  >
    {item.name}
  </span>
))}
        </div>
      </div>
    </nav>
  );
}