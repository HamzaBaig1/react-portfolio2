import reactquiz from "../assets/quiz.png";
import eatsplit from "../assets/eatsplit.png";
import travel from "../assets/travel.png";
import fylo from "../assets/fylo.png";
import xavro from "../assets/Xavro.png";
import abelton from "../assets/abelton.png";
import wwise from "../assets/ww.png";
function Portfolio({ theme }) {
  const bgColor =
    theme === "dark" ? "bg-gradient-to-b from-black to-gray-800" : "bg-white";
  const fontColor = theme === "dark" ? "text-white" : "text-black";

  const portfolio = [
    {
      id: 1,
      title: "WorldWise",
      src: wwise,
      demo: "https://world-wise-demo-app.netlify.app",
      code: "https://github.com/HamzaBaig1/08-worldwise",
    },
    {
      id: 2,
      title: "React Quiz",
      src: reactquiz,
      demo: "https://react-quiz-demo-app.netlify.app/",
      code: "https://github.com/HamzaBaig1/07-react-quiz",
    },
    {
      id: 3,
      title: "Eat-n-Split",
      src: eatsplit,
      demo: "https://eat-n-split-demo.netlify.app/",
      code: "https://github.com/HamzaBaig1/04-eat-n-split",
    },
    {
      id: 4,
      title: "Far Away",
      src: travel,
      demo: "https://far-away-demo.netlify.app/",
      code: "https://github.com/HamzaBaig1/03-travel-list",
    },
    {
      id: 5,
      title: "Fylo",
      src: fylo,
      demo: "https://fylo-demo-page.netlify.app/",
      code: "https://github.com/HamzaBaig1/fylo-dark-theme-landing-page-master",
    },
    {
      id: 6,
      title: "Xavro",
      src: xavro,
      demo: "https://xavro-demo.netlify.app/",
      code: "https://github.com/HamzaBaig1/XAVRO",
    },
    {
      id: 7,
      title: "Abelton",
      src: abelton,
      demo: "https://ableton-demo.netlify.app/",
      code: "https://github.com/HamzaBaig1/XAVRO",
    },
  ];
  return (
    <div
      name="portfolio"
      className={`w-full h-full ${bgColor} ${fontColor} text-white md:h-full lg:py-72 2xl:h-full py-20`}
    >
      <div className="  max-w-screen-lg 2xl:max-w-screen-2xl mx-auto p-4 flex flex-col justify-center lg:h-screen  w-full h-full ">
        <div className="mb-5">
          <p
            className={`${fontColor} text-4xl 2xl:text-7xl font-bold border-b-2 inline border-gray-500`}
          >
            Portfolio
          </p>
          <p className="py-6 2xl:text-xl font-semibold">
            Check out some of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 p-12">
          {portfolio.map((item) => {
            return (
              <div className="shadow-md shadow-gray-600 rounded-lg w-full  ">
                <img
                  src={item.src}
                  alt="React quiz App"
                  className="rounded-md   object-fit "
                />
                <div className="flex w-full justify-center">
                  <h1
                    className={` ${fontColor} text-center capitalize p-3 border-b-2 border-cyan-950 inline-block 2xl:text-xl font-semibold`}
                  >
                    {item.title}
                  </h1>
                </div>
                <div className="flex justify-center">
                  <button
                    className={` ${fontColor} font-semibold w-1/2 px-6 py-2 m-2 2xl:text-xl hover:scale-105 duration-200`}
                  >
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer nooppener"
                    >
                      Demo
                    </a>
                  </button>
                  <button
                    className={`w-1/2 px-6 my-4 2xl:text-xl hover:scale-105 duration-200 ${fontColor} font-semibold`}
                  >
                    <a href={item.code}>Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
