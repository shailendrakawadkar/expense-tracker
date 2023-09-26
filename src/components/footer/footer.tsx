import { TfiGithub } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <div className="container font-semibold text-center p-4 bottom-0 shadow-inner absolute">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 text-center">
        <p>
          Made with <AiFillHeart className="inline text-red-600"/> by Shailendra
          Kawadkar
        </p>
        <div className="flex flex-auto justify-center gap-4">
          {/* <!-- LinkedIn --> */}
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/shailendrakawadkar"
            target="_blank"
            className="text-blue-700 mr-4 hover:text-blue-500 text-xl p-2 shadow-md"
          >
            <FaLinkedinIn />
          </a>

          {/* <!-- GitHub --> */}
          <a
           title="Github"
            href="https://github.com/shailendrakawadkar"
            target="_blank"
            className="text-gray-800  mr-4 hover:text-gray-600 text-xl p-2 shadow-md"
          >
            <TfiGithub />
          </a>

          {/* <!-- LeetCode --> */}
          <a
           title="Leetcode"
            href="https://leetcode.com/shailendrakawadkar"
            target="_blank"
            className="text-orange-500 mr-4 hover:text-orange-400 text-xl p-2 shadow-md"
          >
            <SiLeetcode />
          </a>

          {/* <!-- CodeChef --> */}
          <a
            title="Codechef"
            href="https://www.codechef.com/users/shailu_"
            target="_blank"
            className="text-red-600 hover:text-red-500 text-xl p-2 shadow-md"
          >
            <SiCodechef />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
