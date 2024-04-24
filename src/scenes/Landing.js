import React, { useEffect, useRef } from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MyImage from "../assets/DSC01628.jpg"
import Typed from "typed.js";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedpage }) => {
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");

  const el = useRef(null);

  useEffect(() => {
    var typed = new Typed(el.current, {
      strings: ["programmer", "problem-solver", "gamer", "Web developer"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20  before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1] md:before:max-w-[600px]">
            <img
              src={MyImage}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={MyImage}
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opactiy: 0, x: -50 },
            visible: { opactiy: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Omkar {""}
            <span
              className="xs: relative xs:text-red xs:font-semibold z-20
               before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Gardas
            </span>
          </p>
          <p className="mt-10 mb-7 text-3xl text-center md:text-start">
            I'am a passionate {""}
            <span ref={el} className="text-my-color" />
          </p>
        </motion.div>
        {/* call to action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white tranisition duration-500"
            onClick={() => setSelectedpage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onclick={() => setSelectedpage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0.4, duration:0.5}}
        variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
        }}
        >
          <SocialMediaIcons/>

        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
