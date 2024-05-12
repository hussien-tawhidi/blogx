"use client";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className='w-full py-5 bg-tertiary mt-10'>
      <div className='w-[95%] mx-auto max-w-[1450px]'>
        <div className='py-5 border-b border-gray-300 border-opacity-20 flex  justify-between items-center max-md:flex-col max-md:gap-8'>
          {/* logo */}
          <div className='flex-1'>
            <Link href='/'>
              <h1 className='text-3xl text-light font-extrabold'>
                Explore<span className='text-primary'>X</span>
              </h1>
            </Link>
          </div>
          {/* menu */}
          <ul className='flex items-center justify-center gap-16 text-white max-md:flex-col max-md:gap-5 flex-1'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Route
                  route={link.route}
                  label={link.label}
                  isActive={pathname === link.route}
                />
              </li>
            ))}
          </ul>
          {/*social  */}
          <div className='flex text-light items-center flex-1 justify-around text-xl '>
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaGithub />
          </div>
        </div>
        <div className='text-gray-500 p-4 text-center'>
          ©All reserved by TAWHIDI in 2024:
        </div>
      </div>
    </div>
  );
};

export default Footer;
