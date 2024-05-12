"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
const pathname=usePathname()
  const openMobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <div className='' onClick={openMobileMenuHandler}>
        {!openMobileMenu && <HiMenuAlt3 size={40} className='text-gray-600' />}
      </div>
      {openMobileMenu && (
        <div
          className='fixed w-full h-screen top-0 left-0 bg-black/25 z-50'
          onClick={openMobileMenuHandler}>
          <div
            className='absolute h-screen top-0 left-0 w-60 bg-white z-[999] px-5 overflow-y-hidden'
            onClick={(e) => e.stopPropagation()}>
            {/* logo */}
            <div className='border-b py-5'>
              <Link href='/'>
                <h1 className='text-3xl text-secondary font-extrabold'>
                  Explore<span className='text-primary'>X</span>
                </h1>
              </Link>
            </div>
            {/* social */}
            <div className='flex text-secondary flex-1 justify-around text-xl mt-5'>
              <FaFacebookSquare />
              <FaSquareInstagram />
              <FaGithub />
            </div>
            {/* menu */}
            <ul className='flex items-center justify-center gap-10 flex-col mt-5 flex-1 py-5 border-b'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Route
                    route={link.route}
                    label={link.label}
                    onClick={() => setOpenMobileMenu(false)}
                    isActive={pathname === link.route}
                  />
                </li>
              ))}
            </ul>
            <div className='flex justify-around flex-col mt-4 gap-5'>
              <Button text='Login' aria='Login button' onClick={() => null} />
              <Button
                text='Sign Up'
                aria='SignUp button'
                onClick={() => null}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
