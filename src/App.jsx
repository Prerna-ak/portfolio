import React from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import { MdLocationOn } from "react-icons/md";
import html from "./assets/html.png";
import css from "./assets/css-logo.png";
import git from "./assets/git-logo.png";
import js from "./assets/js-logo.png";
import react from "./assets/react-logo.png";
import netflix from "./assets/netflix.png";
import bmi from "./assets/bmi.png";
import insta from "./assets/insta.png";
import movie from "./assets/movie.png";
import spa from "./assets/spa.png";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BlurFade } from "./components/ui/blur-fade";

import tailwind from "./assets/tailwind.png";

function App() {
  return (
    <>
      <BlurFade delay={0.5} inView>
        <section className="bg-gradient-to-r from-cyan-800 to-gray-900 w-[95%] mx-auto rounded-xl">
          <div className="text-white  max-w-[900px] mx-auto mt-12 p-4">
            <div className="  flex flex-col gap-7 justify-center items-center sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-7 ">
              <img
                src={image1}
                alt=""
                className=" h-[600px] object-cover rounded-lg"
              />

              <div className="text-center sm:text-left">
                <h1 className="text-4xl font-bold sm:text-5xl m-2">
                  Hi, I'm Prerna
                </h1>
                <p className="text-neutral-200 m-2  sm:text-2xl">
                  I’m a Frontend Developer passionate about building clean and
                  responsive web applications. I specialize in HTML, CSS,
                  JavaScript, React, and Tailwind CSS.
                </p>

                <div className="mt-4 flex gap-3 items-center justify-center sm:justify-start">
                  <p className="text-2xl">
                    <MdLocationOn />
                  </p>
                  <p className="text-xl text-white"> Raipur, Chhattisgarh</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-gray-800 to-cyan-900 w-[95%] mx-auto rounded-xl">
          <div className="text-white  max-w-[900px] mx-auto mt-18 p-4">
            <div className="flex flex-col gap-7 justify-center items-center sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:gap-10">
              <img
                src={image2}
                alt=""
                className="h-[600px] w-[380px] object-cover rounded-lg mt-3  mb-3"
              />

              <div className="">
                <h1 className="text-2xl font-bold px-4 py-2 inline bg-gray-600 rounded-sm">
                  About Me
                </h1>
                <p className="mt-8">
                  {" "}
                  I am a Frontend Developer with a degree in Electronics and
                  Telecommunications Engineering, passionate about creating
                  interactive and user-friendly web applications. I am currently
                  expanding my skills into backend technologies to become a more
                  versatile full-stack developer.
                </p>

                <p className="mt-3">
                  I specialize in building modern web applications using React,
                  JavaScript, and Tailwind CSS, and I enjoy bringing designs to
                  life with animations and responsive layouts. I am always eager
                  to learn new technologies and improve my skills to deliver
                  high-quality projects.
                </p>

                <p className="mt-3">
                  My goal is to work on exciting projects and collaborate with
                  creative teams to build impactful web experiences. When I’m
                  not coding, you’ll find me exploring new technologies or
                  playing games.
                </p>

                <p className="mt-3">
                  I am currently seeking job opportunities where I can apply my
                  frontend skills and continue growing as a developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-white  max-w-[900px] mx-auto mt-18 p-4 text-center">
            <h1 className="text-2xl font-bold px-4 py-2 inline bg-gray-600 rounded-sm">
              Skills
            </h1>
            <p className="mt-3 text-xl text-neutral-200 ">
              The skills, tools and technologes I am really good at:
            </p>
            <div className="flex mt-7 gap-12 flex-wrap items-center justify-center">
              <div>
                <img src={html} alt="" />
                <p>HTML</p>
              </div>

              <div>
                <img src={css} alt="" />
                <p>CSS</p>
              </div>

              <div>
                <img src={js} alt="" />
                <p>Javascript</p>
              </div>

              <div>
                <img src={git} alt="" />
                <p>Git</p>
              </div>

              <div>
                <img src={react} alt="" className="h-24 object-cover" />
                <p>React</p>
              </div>

              <div>
                <img src={tailwind} alt="" />
                <p>Tailwind</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-white  max-w-[1020px] mx-auto mt-18 p-4 text-center ">
            <h1 className="text-2xl font-bold px-4 py-2 inline bg-gray-600 rounded-sm">
              Projects
            </h1>
            <p className="mt-5 text-xl text-neutral-200">
              Some of the projects I have made with the skills I know.
            </p>

            <div className="sm:flex sm:flex-row flex flex-col gap-5 mt-8 p-5 rounded-lg items-center bg-gradient-to-l from-gray-800 to-cyan-900 ">
              <img src={netflix} alt="" className=" sm:w-1/2 rounded-sm" />

              <div className="sm:w-1/2  m-5  text-left">
                <h1 className="text-3xl font-bold">Netflix Clone</h1>
                <p className=" mt-3 text-neutral-300 mb-5 ">
                  A responsive Netflix clone website built using HTML and CSS,
                  designed to replicate the look and feel of the original
                  Netflix homepage. This project focuses on creating a modern,
                  mobile-friendly layout with attractive styling and smooth
                  responsiveness.
                </p>

                <a
                  href="https://netflix-clone-responsive-ivory.vercel.app/ "
                  className="bg-gray-600 px-4 py-1 rounded-sm "
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="sm:flex sm:flex-row-reverse flex flex-col gap-5 mt-8 p-5 rounded-lg items-center bg-gradient-to-l from-cyan-900 to-gray-800 ">
              <img src={bmi} alt="" className=" sm:w-1/2 rounded-sm" />

              <div className="sm:w-1/2  m-5  text-left">
                <h1 className="text-3xl font-bold">BMI Calculator</h1>
                <p className=" mt-3 text-neutral-300 mb-5 ">
                  A responsive BMI (Body Mass Index) calculator web application
                  built using HTML, CSS, and JavaScript. Users can input their
                  height and weight to instantly calculate their BMI, with
                  dynamic feedback indicating whether they are underweight,
                  normal, overweight, or obese. The app features a simple and
                  clean UI for an intuitive user experience.
                </p>

                <a
                  href="https://bmi-calculator-six-sand.vercel.app/ "
                  className="bg-gray-600 px-4 py-1 rounded-sm "
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-5 mt-8 p-5 rounded-lg items-center bg-gradient-to-l from-gray-800 to-cyan-900 ">
              <img src={movie} alt="" className=" sm:w-1/2 rounded-sm" />

              <div className="sm:w-1/2  m-5  text-left">
                <h1 className="text-3xl font-bold">Movie Search App</h1>
                <p className=" mt-3 text-neutral-300 mb-5 ">
                  A responsive movie search application built using HTML, CSS,
                  and JavaScript, allowing users to search for any movie and
                  instantly view details like title, release year, ratings,
                  plot, and poster image. The app fetches data from an external
                  movie API to deliver accurate and real-time movie information
                  with a clean and user-friendly interface.
                </p>

                <a
                  href="https://movie-web-alpha-nine.vercel.app/ "
                  className="bg-gray-600 px-4 py-1 rounded-sm "
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="sm:flex sm:flex-row-reverse flex flex-col gap-5 mt-8 p-5 rounded-lg items-center bg-gradient-to-l from-cyan-900 to-gray-800 ">
              <img src={insta} alt="" className=" sm:w-1/2 rounded-sm" />

              <div className="sm:w-1/2  m-5  text-left">
                <h1 className="text-3xl font-bold">
                  Instagram SPA Demonstration
                </h1>
                <p className=" mt-3 text-neutral-300 mb-5 ">
                  A single-page Instagram clone built using React, HTML, CSS,
                  and JavaScript. The app allows users to view a list of friend
                  requests, click on a profile to see the user’s profile page
                  with their posts, and click on individual posts to view
                  detailed information. This project demonstrates dynamic
                  content rendering and navigation in a SPA, offering a seamless
                  and interactive user experience.
                </p>

                <a
                  href="https://react-instagram-rust.vercel.app/ "
                  className="bg-gray-600 px-4 py-1 rounded-sm "
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-5 mt-8 p-5 rounded-lg items-center bg-gradient-to-l from-gray-800 to-cyan-900 ">
              <img src={spa} alt="" className=" sm:w-1/2 rounded-sm" />

              <div className="sm:w-1/2  m-5  text-left">
                <h1 className="text-3xl font-bold">React SPA Netflix</h1>
                <p className=" mt-3 text-neutral-300 mb-5 ">
                  This single-page movie trailer application is built using
                  React, HTML, CSS, and JavaScript. Users can browse through a
                  collection of movies, and by clicking on a movie poster, they
                  can instantly watch its trailer along with detailed
                  information such as the title, description, and release year.
                  The navigation bar enhances the experience by allowing users
                  to explore different categories like Trending, Bollywood, and
                  Hollywood, making it easy to discover and enjoy a wide range
                  of movies. With smooth navigation and dynamic content
                  rendering, the app delivers a seamless and interactive user
                  experience similar to modern streaming platforms.
                </p>

                <a
                  href="https://react-netflix-spa.vercel.app/"
                  className="bg-gray-600 px-4 py-1 rounded-sm "
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-gray-800 to-cyan-900  mb-16 w-[95%] mx-auto rounded-xl">
          <div className="text-white  max-w-[900px] mx-auto mt-18 p-16 text-center">
            <h1 className="text-2xl font-bold px-4 py-2  inline bg-gray-600 rounded-sm">
              Contact Me
            </h1>
            <div className="mt-8 flex gap-2 sm:gap-5 items-center justify-center">
              <p className="sm:text-6xl text-2xl">
                <IoMdMail />
              </p>
              <a
                href="mailto:archukumbhare27@gmail.com"
                className="text-xl sm:text-5xl"
              >
                archukumbhare27@gmail.com
              </a>
            </div>

            <div className="mt-5 flex gap-2 sm:gap-5 items-center justify-center">
              <p className="sm:text-6xl text-2xl">
                <IoMdCall />
              </p>
              <p className="text-xl sm:text-5xl">9981954000</p>
            </div>

            <div className="flex gap-12 justify-center mt-8">
              <a href="" className="text-5xl">
                <FaLinkedin />
              </a>
              <a href="" className="text-5xl">
                <FaGithub />
              </a>
              <a href="" className="text-5xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
      </BlurFade>
    </>
  );
}

export default App;
