"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Avatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: { target: any }) => {
    // @ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
        {/*<Languages />*/}

        <button
          type="button"
          className="flex text-sm md:me-0"
          id="user-menu-button"
          aria-expanded={dropdownOpen}
          onClick={handleDropdownToggle}
        >
          <div className="flex items-center">
            <div className="z-30 w-10 h-10 sm:-mr-5 rounded-full bg-primary text-primary-foreground flex justify-center items-center text-lg font-medium">
              AF
            </div>
            <div className="h-10 flex border-2 border-primary items-center pl-7 border-l-0 rounded-sm text-lg font-medium pr-3 max-sm:hidden">
              AMOR FATI
            </div>
          </div>
        </button>

        <div
          ref={dropdownRef}
          className={`z-50 ${dropdownOpen ? "absolute top-7 right-0" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Asosiy oyna
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Profil ma'lumotlari
              </Link>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Chiqish
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Avatar;
