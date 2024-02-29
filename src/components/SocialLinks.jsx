import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed left-0">
      <ul>
        <li className="flex justify-between items-center rounded-tr-md bg-blue-600 px-4 w-40 h-12 2xl:w-50 2xl:h-20 ml-[-100px] hover:ml-[-10px] duration-200">
          <a
            href="https://www.linkedin.com/in/hamza-suleman-3b7766249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
          >
            LinkedIn <FaLinkedin size={25} />{" "}
          </a>
        </li>
        <li className="flex justify-between items-center bg-[#333333] px-4 w-40 h-12 2xl:w-50 2xl:h-20 ml-[-100px] hover:ml-[-10px] duration-200">
          <a
            href="https://github.com/HamzaBaig1"
            target="_blank rel"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Github <FaGithub size={25} />{" "}
          </a>
        </li>
        <li className="flex justify-between items-center bg-[#6fc2b0] px-4 w-40 h-12 2xl:w-50 2xl:h-20 ml-[-100px] hover:ml-[-10px] duration-200">
          <a
            href="mailto:hamzasuleman010@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Mail <HiOutlineMail size={25} />{" "}
          </a>
        </li>
        <li className="flex justify-between items-center rounded-br-md bg-[#565f69] px-4 w-40 h-12 2xl:w-50 2xl:h-20 ml-[-100px] hover:ml-[-10px] duration-200">
          <a
            href="/resume.pdf"
            className="flex justify-between items-center w-full text-gray-300"
            download
            target="_blank"
          >
            Resume <BsFillPersonLinesFill size={25} />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
