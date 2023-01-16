import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

import ProfileImg from "../assets/p2.png";

const About = () => {
  return (
    <div id="about" className="section text-center ">
      {/* Information */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-yellow-300 font-bold">
        Sameer Manjrekar
      </h2>
      <h4 className="text-2xl md:text-3xl text-slate-600 py-3 md:py-5 dark:text-white">
        Web Application and React js developer
      </h4>
      <p className="text-sm md:text-md lg:text-lg py-2 text-slate-600 leading-6 md:leading-7 opacity-80 max-w-xl mx-auto dark:text-white">
        I'm a Senior React js developer using TypeScript, JavaScript, Redux,
        Redux Toolkit, Redux Saga, Redux Thunk, TailwindCSS, Material UI,
        Bootstrap, HTML5, CSS, Node js with Express js for creatig RESTful
        endpoints, Sequelize as an ORM and deploying applications on Netlify and
        on AWS. Akso has experience on ASP.NET MVC using C#, Entity Framework,
        SQL Server. Looking to explore more on serverless, GraphQL,Next js and
        Remix js.
      </p>
      {/* Image */}
      <div className="m-auto bg-gradient-to-b from-yellow-300 w-80 h-80 rounded-full mt-10 md:mt-15 relative cursor-pointer">
        <img
          src={ProfileImg}
          alt="profile-image"
          className="object-cover fill-inherit"
        />
      </div>
      {/* Social Media */}
      <div className="mt-12 flex gap-12 justify-center cursor-pointer text-gray-600 text-4xl dark:text-white">
        <BsGithub size={40} />
        <BsFacebook size={40} />
        <BsInstagram size={40} />
        <BsLinkedin size={40} />
        <BsTwitter size={40} />
      </div>
    </div>
  );
};

export default About;
