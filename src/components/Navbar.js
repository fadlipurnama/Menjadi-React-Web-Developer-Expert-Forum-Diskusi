import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import { MdLeaderboard, MdLogout } from 'react-icons/md';

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="bg-slate-700">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="block py-6 text-lg font-bold text-slate-200 lg:text-2xl">
            <h1>Forum Diskusi</h1>
          </div>
          <div className="group border border-slate-200 hover:border-slate-300">
            <Link to="/login">
              <button type="button" className=" h-8 px-2 text-xs text-slate-200 group-hover:bg-slate-500 group-hover:text-white group-active:bg-slate-600 lg:h-10 lg:px-3 lg:text-base">
                MASUK
              </button>
            </Link>
          </div>
          <div
            onMouseEnter={() => {
              setMenu(true);
            }}
            onMouseLeave={() => {
              setMenu(false);
            }}
            className="hidden h-16 w-16 cursor-pointer items-center"
          >
            <FaUserCircle className="h-full w-full text-slate-200" />
            <IoMdArrowDropdown
              className={`h-3/5 w-3/4 text-slate-200 duration-300 ${
                menu && 'rotate-180'
              }`}
            />
          </div>
        </div>
        <nav
          onMouseEnter={() => {
            setMenu(true);
          }}
          onMouseLeave={() => {
            setMenu(false);
          }}
          className={`top-16 right-16 w-full max-w-[200px] rounded-lg bg-white shadow-lg
          ${menu ? 'absolute' : 'hidden'}`}
        >
          <ul className="">
            <li className="hover:bg-gray-200">
              <Link
                to="/profil"
                className="mx-6 flex items-center gap-6 py-2 text-base font-semibold text-slate-600"
              >
                <FaRegUser />
                Profil
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/leaderboards"
                className="mx-6 flex items-center gap-6 py-2 text-base font-semibold text-blue-600"
              >
                <MdLeaderboard />
                {' '}
                Leaderboards
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/Leaderboards"
                className="mx-6 flex items-center gap-6 py-2 text-base font-semibold text-red-600"
              >
                <MdLogout />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
