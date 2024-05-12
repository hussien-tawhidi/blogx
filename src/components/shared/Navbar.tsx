"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import Route from "../ui/Route";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = ({ session }: any) => {
  const path = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const router = useRouter();

  const showUserMenu = () => {
    setUserMenu(!userMenu);
  };

  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "py-4 w-full",
        isScrolling ? "fixed top-0 bg-light shadow-lg z-10" : "relative"
      )}>
      <div
        className={clsx(
          "w-[90%] mx-auto max-[1450px] flex items-center justify-between pb-5 border-b border-gray-100",
          isScrolling && "pb-0 border-none"
        )}>
        {/* logo */}
        <div className='flex-1'>
          <Link href='/'>
            <h1 className='text-3xl text-secondary font-extrabold'>
              Explore<span className='text-primary'>X</span>
            </h1>
          </Link>
        </div>
        {/* menu */}
        <ul className='flex items-center justify-center gap-16 flex-2 max-md:hidden'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Route
                route={link.route}
                label={link.label}
                isActive={path === link.route}
              />
            </li>
          ))}
        </ul>
        {/* auth */}
        <div className='flex gap-5 flex-1 justify-end max-md:hidden'>
          {session ? (
            <div className='flex justify-center items-center gap-2 relative'>
              <p>{session?.user?.name}</p>

              <button
                className='w-30 h-30 rounded-full overflow-hidden '
                type='button'
                onClick={showUserMenu}>
                <Image
                  src={session?.user?.image}
                  alt='User image'
                  width={30}
                  height={30}
                />
              </button>
              {userMenu && (
                <ul className='absolute right-0 top-8 bg-light p-2 rounded shadow flex flex-col gap-3 z-30 w-[100px]'>
                  <li onClick={showUserMenu}>
                    <Link href='/create'>Create Post</Link>
                  </li>
                  <li onClick={showUserMenu}>
                    <Link
                      href={{
                        pathname: `/my-posts/${session?.user?.id}`,
                        query: { ...session },
                      }}>
                      My Posts
                    </Link>
                  </li>
                  <li onClick={showUserMenu}>
                    <button onClick={() => signOut()} type='button'>
                      SignOut
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Button
                text='Login'
                aria='Login button'
                onClick={() => router.push("/sign-in")}
              />
              <Button
                text='Sign Up'
                aria='SignUp button'
                onClick={() => router.push("/register")}
              />
            </>
          )}
        </div>
        <div className='max-md:block hidden'>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
