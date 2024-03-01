// import heroImage from "../assets/hamza.jpg";
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
      className={`h-full w-full ${bgColor} transition-all duration-150 py-10`}
    >
      <div className="flex flex-col  md:flex-row justify-center items-center h-full w-full md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-8 ">
        <div className="flex flex-col h-full w-full justify-center /*2xl:h-1/2*/ mt-32 xl:mt-52 lg:mt-42  2xl:mt-96 lg:items-center ">
          <h2
            className={`${fontColor}  text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold mb-2`}
          >
            Hello, I'm Hamza
          </h2>
          <h4
            className={`${fontColor} text-md md:text-xl lg:text-2xl 2xl:text-5xl 2xl:mt-5 font-bold mt-2`}
          >
            Front-end Web Developer
          </h4>
          <p className="lg:text-center text-sm leading-relaxed  text-gray-500 max-w-xl lg-text-md 2xl:max-w-screen-lg 2xl:text-3xl  py-4 2xl:py-10 font-semibold">
            Welcome to my corner of the web. I'm a frontend developer on a
            mission to blend imagination with technology. Through pixels and
            code, I sculpt immersive experiences that captivate and inspire.I
            thrive on challenges that push the boundaries of innovation. Join me
            on a journey where innovation meets creativity, and together, let's
            shape the web of tomorrow.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button
                className={`group font-semibold text-white flex items-center w-fit px-4 text-sm py-3 2xl:py-6 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer 2xl:text-3xl`}
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
        {/* <div className="2xl:w-1/2 2xl:h-1/2">
            <img
              src={heroImage}
              alt=""
              className=" hidden rounded-2xl mx-auto md:w-full md:flex "
            />
          </div> */}
      </div>
    </div>
  );
}

export default Home;
