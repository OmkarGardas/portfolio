import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import WeatherIcon from "../assets/Weather2.jpg";
import AvesIcon from "../assets/Aves3.jpg";
import Dictionary from "../assets/dictionary2.jpg";
import Todo from "../assets/todo.jpg";
import CRUD from "../assets/crud.jpg";

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ durations: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>

        <p className="font-playfair text-xl text-zinc-200 mt-5">
          Here are few of my projects that I have worked on.
        </p>
      </motion.div>
      {/* Projects */}

      <div className="max-w-screen-xl mx-auto py-15 sm:p-10 md:p-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="my-3">
            <h1 className="text-3xl font-bold">
              {" "}
              <span className="text-red">Major</span> Project
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <a href="https://github.com/OmkarGardas/Aves-Mobile">
              <div className="relative">
                <img src={AvesIcon} alt="birdImage" className="w-full" />
              </div>
              <div className="flex flex-col px-6 py-4 bg-white text-zinc-800">
                <div className="flex font-bold font-opensans text-xl tracking-wider">
                  AvesApp
                </div>
                <div className="flex font-sans">
                  Flutter InceptionV3(ML) Firebase
                </div>
              </div>
            </a>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <a href="https://github.com/OmkarGardas/XIT_TASKS/tree/crud_ssms/client">
              <div className="relative">
                <img src={CRUD} alt="birdImage" className="w-full" />
              </div>
              <div className="flex flex-col px-6 py-4 bg-white text-zinc-800">
                <div className="flex font-bold font-opensans text-xl tracking-wider">
                  CRUD Operations
                </div>
                <div className="flex font-sans">
                  Reactjs Dotnet Sqlserver
                </div>
              </div>
            </a>
          </div>

          
        </motion.div>
      </div>
      <div className="max-w-screen-xl mx-auto py-15 sm:p-10 md:p-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="my-3">
            <h1 className="text-3xl font-bold">
              {" "}
              <span className="text-red">Minor</span> Project
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <a href="https://github.com/OmkarGardas/WeatherApp">
              <div className="relative">
                <img src={WeatherIcon} alt="weatherImage" className="w-full" />
              </div>
              <div className="flex flex-col px-6 py-4 bg-white text-zinc-800">
                <div className="flex font-bold font-opensans text-xl tracking-wider">
                  WeatherApp
                </div>
                <div className="flex font-sans">
                  Reactjs CSS API(openWeatherAPI)
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <a href="https://github.com/OmkarGardas/VocabVault">
              <div className="relative">
                <img src={Dictionary} alt="dictionary png" className="w-full" />
              </div>
              <div className="flex flex-col px-6 py-4 bg-white text-zinc-800">
                <div className="flex font-bold font-opensans text-xl tracking-wider">
                  VocabVault
                </div>
                <div className="flex font-sans">
                  HTML CSS <br /> JAVASCRIPT
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <a href="https://github.com/OmkarGardas/notesapp_ts">
              <div className="relative">
                <img src={Todo} alt="dictionary png" className="w-full" />
              </div>
              <div className="flex flex-col px-6 py-4 bg-white text-zinc-800">
                <div className="flex font-bold font-opensans text-xl tracking-wider">
                  NotesApp
                </div>
                <div className="flex font-sans">
                  ReactJs Tailwind <br /> Typescript
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
