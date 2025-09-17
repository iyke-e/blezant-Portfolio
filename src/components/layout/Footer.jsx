import logo from "../../assets/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className=" border-t border-white/20 pt-10">
      <div className="pb-4 section-inline">
        <div className="mb-16">
          <img src={logo} className="w-20 h-20" alt="" />
        </div>

        <div className=" space-y-16">
          <ul className=" space-y-3 items-center cursor-pointer">
            <li className="w-fit ">
              <a
                target="_blank"
                href="https://github.com/Blez-dev"
                className="flex items-center gap-4"
              >
                <FaGithub className="w-8 h-8" />
                <span>github.com/Blez-dev</span>
              </a>
            </li>
            <li className="w-fit">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/blessing-adu"
                className="flex items-center gap-4"
              >
                <FaLinkedin className="w-8 h-8" />
                <p>linkedin.com/in/blessing-adu</p>
              </a>
            </li>
            <li className="flex items-center gap-4 w-fit">
              <TfiEmail className="w-8 h-8" />
              <p>blezdev97@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-center border-t border-white/20 py-4">
        <p className="text-center">All Rights Reserved &copy; Blezant 2025</p>
      </div>
    </div>
  );
};

export default Footer;
