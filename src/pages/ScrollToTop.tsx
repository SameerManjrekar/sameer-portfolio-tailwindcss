import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollToTop = () => {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDisplay(window.scrollY > 400);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      {display && (
        <div className="flex items-center justify-center rounded-full text-blue-500 fixed right-[5%] bottom-40 w-8 h-8 text-3xl">
          <a href="#">
            <BiChevronUp className="text-3xl dark:text-white" />
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
