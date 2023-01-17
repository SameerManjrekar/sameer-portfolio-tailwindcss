import { motion } from "framer-motion";

import Project1Img from "../assets/web1.png";
import Project2Img from "../assets/web2.png";
import Project3Img from "../assets/web3.png";
import Project4Img from "../assets/web4.png";
import Project5Img from "../assets/web5.png";
import Project6Img from "../assets/web1.png";

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <h2 className="text-3xl md:text-4xl py-10 font-bold opacity-60  dark:text-white">
        Portfolio
      </h2>
      <p className="text-sm md:text-md lg:text-lg text-slate-600 py-2 leading-6 md:leading-7 opacity-80 mb-5 md:mb-8  dark:text-white">
        These are some of the projects that I have worked on using React js,
        Redux, TailwindCSS, MUI, Bootstrap and using SQL Server as the database.
        Some of the projects are in financial domain, some are in Oil and Gas
        domain and I have learnt a lot in working on these projects.
      </p>
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project1Img}
              alt="project-1"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project2Img}
              alt="project-2"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project3Img}
              alt="project-3"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project4Img}
              alt="project-4"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project5Img}
              alt="project-5"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="basis-1/3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -10, borderRadius: "100%" }}
          >
            <img
              src={Project6Img}
              alt="project-6"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
