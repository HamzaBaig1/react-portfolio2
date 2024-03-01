import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/JS.png";
import github3 from "../assets/github3.svg";
import github2 from "../assets/github.svg";
import bootstrap from "../assets/bootstrap.png";
function Experience({ theme }) {
  const bgColor =
    theme === "dark" ? " bg-gradient-to-b from-gray-800 to-black" : "bg-white";
  const fontColor = theme === "dark" ? "text-white" : "text-black";

  const tech = [
    {
      id: 1,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-700 py-6",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: theme === "dark" ? github3 : github2,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className={`pt-20 md:py-32 w-full md:h-full ${bgColor}`}
    >
      <div className="px-8 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full  md:h-full lg:h-screen text-white ">
        <div className="pb-8">
          <p
            className={`${fontColor} text-4xl 2xl:text-7xl font-bold border-b-4 border-gray-500 p-2 inline`}
          >
            Experience
          </p>
          <p className={`${fontColor} font-semibold py-6 2xl:text-xl 2xl:py-8`}>
            These are the technologies I work with
          </p>
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 px-12 md:px-0">
          {tech.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md  py-3 2xl:py-10 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt="" className=" w-20 mx-auto" />
              <p className={`mt-4 ${fontColor} font-semibold`}>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
