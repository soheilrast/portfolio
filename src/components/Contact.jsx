import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import * as yup from "yup";

import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

import pro from "../assets/w71.webp";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});


const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const form = useRef();
  const lastSent = useRef(0);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const now = Date.now();

if (now - lastSent.current < 10000) {
  return;
}

lastSent.current = now;

    if (loading) return;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

 
    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (err) {
      setToast({
        type: "error",
        message: err.errors?.[0] || "Validation error ❌",
      });

      setTimeout(() => setToast(null), 3000);
      return;
    }


    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_qhfhugr",
        "template_ra8ivfn",
        form.current,
        "8Y-_37rGrW3winzMk"
      );

      setToast({
        type: "success",
        message: "Message sent successfully 🚀",
      });

      form.current.reset();
    } catch (err) {
      setToast({
        type: "error",
        message: "Failed to send message ❌",
      });
    } finally {
      setLoading(false);

      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed right-5 top-20 px-5 py-3 rounded-xl text-white shadow-lg z-50 ${
              toast.type === "success"
                ? "bg-green-500 top-14"
                : "bg-red-500 top-5"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <section
  id="contact"
  className="relative min-h-[calc(100vh-72px)] flex items-center bg-[#0a0a0a] overflow-hidden px-5 py-4"
>
    
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-16 top-68 w-52 h-72 rounded-full bg-pink-500/20 blur-[130px]" />
          <div className="absolute right-10 bottom-20 w-50 h-80 rounded-full bg-purple-600/20 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
    
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mb-6"
          >
            <motion.p
              variants={titleVariant}
              className="font-bold mt-5 tracking-[5px] text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text"
            >
              LET'S CONNECT
            </motion.p>

            <motion.h2
              variants={titleVariant}
              className="text-3xl lg:text-4xl font-bold text-white mt-2"
            >
              Have a project in mind?
            </motion.h2>

            <motion.p
              variants={titleVariant}
              className="text-gray-400 mt-2 max-w-lg  text-sm leading-6"
            >
              I'm always interested in building modern, user-friendly web experiences. Whether it's a freelance project or a full-time opportunity, I'd love to hear from you.
            </motion.p>
          </motion.div>

     
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 lg:p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  Send Message
                </h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-3">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full font-medium h-11 bg-[#141414] border border-white/10 rounded-xl px-4 text-white outline-none focus:border-purple-500 transition"
                  />
<input
  type="text"
  name="website"
  style={{ display: "none" }}
/>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="font-medium w-full h-11 bg-[#141414] border border-white/10 rounded-xl px-4 text-white outline-none focus:border-purple-500 transition"
                  />

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="font-medium w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-white resize-none outline-none focus:border-purple-500 transition"
                  />

                  <button
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <FiSend />
                  </button>
                </form>
              </div>

   

<div className="flex flex-col justify-center">

  <h3 className="text-white text-xl font-semibold mb-8">
    Contact Information
  </h3>

  <div className="space-y-5">


    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
        <FiMail />
      </div>

      <div>
        <p className="text-gray-400 text-sm font-medium">Email</p>
        <p className="text-white">s0heil.r20000@gmail.com</p>
      </div>
    </div>


    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
        <FiMapPin />
      </div>

      <div>
        <p className="text-gray-400 text-sm font-medium">Location</p>
        <p className="text-white">Gilan, Rasht</p>
      </div>
    </div>

    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
        <FiLinkedin />
      </div>

      <div>
        <p className="text-gray-400 text-sm font-medium">LinkedIn</p>

        <a
          href="https://www.linkedin.com/in/soheilrastari/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-400 transition"
        >
          linkedin.com/in/soheilrastari
        </a>
      </div>
    </div>


    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
        <FiGithub />
      </div>

      <div>
        <p className="text-gray-400 text-sm font-medium">GitHub</p>

        <a
          href="https://github.com/soheilrast/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-400 transition"
        >
          github.com/soheilrast
        </a>
      </div>
    </div>

  </div>
</div>
           
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-500/40 blur-[90px]" />
                  <img
                    src={pro}
                    alt="Contact"
                    className="relative rounded-3xl object-fill w-[390px] h-[330px] border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}