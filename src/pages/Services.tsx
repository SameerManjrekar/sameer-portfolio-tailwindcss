import { motion } from "framer-motion";
import DesignImg from "../assets/design.png";
import CodeImg from "../assets/code.png";
import ConsultingImg from "../assets/consulting.jpg";

const Services = () => {
  return (
    <div id="services" className="section">
      <h2 className="text-3xl md:text-4xl py-10 font-bold opacity-60 dark:text-white">
        Services
      </h2>
      <p className="text-sm md:text-md lg:text-lg text-slate-600 py-2 leading-6 md:leading-7 opacity-80  dark:text-white">
        Since my expertise mostly lies in Web Applications, I offer my services
        to create applications using frontend library like React js and create
        responsive layouts using CSS with breakpoints, TailwindCSS, Material UI
        or Bootstrap and use Headless UI which are agnostic rrespective of any
        library used. Design UI from prototypes received from UX.Do research
        based on various Open Source libraries available.
      </p>
      {/* Cards */}
      <div className="md:flex mx-auto gap-10">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="text-center bg-yellow-300 rounded-xl my-8 md:my-10 shadow-md p-5">
            <img src={DesignImg} alt="website-designing" className="inline" />
            <h2 className="text-2xl md:text-3xl font-bold ">
              Website Designing
            </h2>
            <p className="text-sm md:text-md py-2 md:py-3 text-slate-600 opacity-90 leading-6 md:leading-7">
              By receiving the figma file from a UX resource, I am able to
              create mock up's using CSS or by using a CSS library or a
              framework. I am able to design the layout using Flexbox and Grid.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="text-center bg-yellow-300 rounded-xl my-8 md:my-10 shadow-md p-5">
            <img src={CodeImg} alt="web-development" className="inline" />
            <h2 className="text-2xl md:text-3xl font-bold">Web Development</h2>
            <p className="text-sm md:text-md py-2 md:py-3 text-slate-600 opacity-90 leading-6 md:leading-7">
              Responsible for the design and development of websites. Ensure
              that sites meet user expectations by ensuring they look good, run
              smoothly and offer easy access points with no loading issues
              between pages or error messages.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="text-center bg-yellow-300 rounded-xl my-8 md:my-10 shadow-md p-5">
            <img src={ConsultingImg} alt="consulting" className="inline" />
            <h2 className="text-2xl md:text-3xl font-bold">Consulting</h2>
            <p className="text-sm md:text-md py-2 md:py-3 text-slate-600 opacity-90 leading-6 md:leading-7">
              As a consultants develop websites and applications. Consult with
              clients to determine the scope of website development projects,
              implement SEO strategies to increase traffic flow to websites, and
              maintain websites.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
