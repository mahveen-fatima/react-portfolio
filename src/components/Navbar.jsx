import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="mx-2 w-10 text-5xl">Mf</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://www.linkedin.com/in/mahveen-fatima-48857a2b9/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
        </a>

        <a href="https://github.com/mahveen-fatima" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
        </a>

        <a href="mailto:mahveenfatima2224@gmail.com" target="_blank" rel="noopener noreferrer">
        <BiLogoGmail size={30} />
        </a>

        </div>
    </nav>
  )
}

export default Navbar
