import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between md:px-20 md:py-14">
      <div className="flex gap-8">
        <a href="" className="mr-2 text-blue-500 text-[0.9rem] dark:text-white">
          <BsFacebook size={25} />
        </a>
        <a href="" className="mr-2 text-blue-500 text-[0.9rem] dark:text-white">
          <BsInstagram size={25} />
        </a>
        <a href="" className="mr-2 text-blue-500 text-[0.9rem] dark:text-white">
          <BsLinkedin size={25} />
        </a>
        <a href="" className="mr-2 text-blue-500 text-[0.9rem] dark:text-white">
          <BsTwitter size={25} />
        </a>
        <a href="" className="mr-2 text-blue-500 text-[0.9rem] dark:text-white">
          <BsGithub size={25} />
        </a>
      </div>
      <div className="text-[1.2rem] text-blue-500 dark:text-white">
        &#169; 2023 Sameer Manjrekar All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
