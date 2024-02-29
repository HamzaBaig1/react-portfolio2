import heroImage from "../assets/hamza.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home({ theme }) {
  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-b from-black via-black to-gray-800"
      : "bg-white";
  const fontColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <div
      name="home"
      className={`h-screen w-full ${bgColor} transition-all duration-150`}
    >
      <div className="flex flex-col  md:flex-row justify-center items-center h-full w-full md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-5 ">
        <div className="flex flex-col h-full w-full justify-center 2xl:h-1/2  2xl:mt-36  ">
          <h2
            className={`${fontColor} text-4xl lg:text-7xl 2xl:text-8xl font-bold`}
          >
            Hello, I'm Hamza
          </h2>
          <h4
            className={`${fontColor} text-lg md:text-xl lg:text-3xl 2xl:text-4xl font-bold mt-2`}
          >
            Front-end Web Developer
          </h4>
          <p className="text-gray-500 max-w-lg 2xl:max-w-screen-md 2xl:text-3xl 2xl:leading-10 py-4 2xl:py-6 font-semibold">
            Welcome to my corner of the web. As a front-end developer, I strive
            to blend creativity with functionality to craft captivating digital
            experiences. Dive into my portfolio and discover the fusion of
            design and code that brings visions to life.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button
                className={`group font-semibold ${fontColor} flex items-center w-fit px-6 py-3 2xl:py-6 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer 2xl:text-3xl`}
              >
                {/* <a href=""> Portfolio</a> */}

                {"Portfolio"}
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  {" "}
                  <MdKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="2xl:w-1/2 2xl:h-1/2">
          <img
            src={heroImage}
            alt=""
            className=" hidden rounded-2xl mx-auto md:w-full md:flex "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
