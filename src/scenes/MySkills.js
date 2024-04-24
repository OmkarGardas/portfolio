import React from "react";
import LineGradient from "../components/LineGradient";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-xl">
            I have developed a solid foundation in programming languages such as
            C++, Java,and I have also gained experience in software development
            methodologies, data structures, and algorithms. I am also familiar
            with web development such as Html, CSS , Javascript and ReactJs
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={skillsImage} alt="skills" className="z-10" />
            </div>
          ) : (
            <img src={skillsImage} alt="skills" className="z-10" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-4 gap-4 p-5 mt-5 md:p-0">
        <div className="col-span-2 p-6">
          <div className="text-xl font-playfair font-medium mb-5">
            What I know
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex-1 flex flex-col gap-4 bg-card-grey p-4 rounded-md shadow-lg">
              <div className="font-opensans text-zinc-200 font-medium text-xl tracking-wider">
                FrontEnd
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-body p-2 text-xs rounded-md">HTML</div>
                <div className="text-xs rounded-md p-2 bg-body">CSS</div>
                <div className="text-xs rounded-md p-2 bg-body border border-sky-500 ">
                  Tailwind
                </div>
                <div className="text-xs rounded-md border border-amber-500 p-2 bg-body">
                  Javascript
                </div>
                <div className="text-xs rounded-md border border-cyan-500 p-2 bg-body">
                  ReactJS
                </div>
                <div className="text-xs rounded-md bg-body p-2 ">
                  Typescript
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 bg-card-grey p-4 rounded-md shadow-lg">
              <div className="font-opensans text-zinc-200 font-medium text-xl tracking-wider ">
                Languages
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="text-sm rounded-md bg-body p-2 border border-teal-500">
                  C++
                </div>
                <div className="text-sm rounded-md bg-body p-2 ">Java</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 bg-card-grey p-4 rounded-md shadow-lg">
              <div className="text-zinc-200 font-opensans font-medium tracking-wider text-xl">
                BackEnd
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="text-xs rounded-md p-2 bg-body">NodeJs</div>
                <div className="text-xs rounded-md p-2 bg-body">ExpressJs</div>
                <div className="text-xs rounded-md p-2 bg-body border border-green-500">
                  Mongoose
                </div>
                <div className="text-xs rounded-md p-2 bg-body border border-cyan-500">
                  Dotnet
                </div>
                <div className="text-xs rounded-md p-2 bg-body border border-pink-300">Sql Server</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
