function About({ theme }) {
  const bgColor =
    theme === "dark" ? "bg-gradient-to-b from-gray-800 to-black" : "bg-white";
  const fontColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <div name="about" className={`w-full h-screen  ${bgColor} text-white`}>
      <div className=" p-4 px-8 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl h-full lg:h-screen 2xl:h-screen mx-auto flex flex-col justify-center ">
        <div className="pb-4">
          <p
            className={` ${fontColor} text-4xl 2xl:text-7xl font-bold inline border-b-4 border-gray-500`}
          >
            About
          </p>
        </div>
        <p
          className={`text-md font-semibold leading-relaxed md:text-xl 2xl:text-4xl  md:mt-20 mt-10 ${fontColor}`}
        >
          Hello there! I'm a front-end developer passionate about creating
          immersive digital experiences. With a strong foundation in HTML, CSS,
          and JavaScript, I bring your ideas to life with a touch of creativity
          and precision. Proficient in React.js, Tailwind CSS, and Bootstrap, I
          harness the power of modern frameworks and libraries to build
          responsive and dynamic web applications. From crafting elegant user
          interfaces to optimizing performance, I thrive on challenges that push
          the boundaries of innovation. Let's collaborate and transform visions
          into stunning realities, one line of code at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
