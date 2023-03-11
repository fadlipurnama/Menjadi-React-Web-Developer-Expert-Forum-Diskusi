import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { MdLeaderboard, MdLogout } from 'react-icons/md';
import PropTypes from 'prop-types';

function Navbar({ authUser, signOut }) {
  const [menu, setMenu] = useState(false);

  return (
    <header className='sticky top-0 z-40 bg-slate-700'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='block py-6 text-xl font-bold text-slate-200 lg:text-2xl'>
            <Link to='/'>
              <h1>Forum Diskusi App</h1>
            </Link>
          </div>
          <div
            onMouseEnter={() => {
              setMenu(true);
            }}
            onMouseLeave={() => {
              setMenu(false);
            }}
            className='flex h-10 cursor-pointer items-center gap-4 md:h-11 lg:h-12'
          >
            <div className='text-slate-200 lg:text-2xl'>
              <h1>{authUser.name}</h1>
            </div>
            <img
              src={authUser.avatar}
              alt={authUser.name}
              className={`h-full w-full rounded-full text-slate-200 ${menu && 'border-2 border-slate-50'}`}
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
          className={`top-14 right-12 w-full max-w-[200px] rounded-lg z-50 bg-white shadow-lg lg:top-16 lg:right-24 
          ${menu ? 'absolute ' : 'hidden'}`}
        >
          <ul>
            <li className='cursor-pointer rounded-t-lg hover:bg-gray-200'>
              <Link to='/profile' className='mx-6 flex w-full items-center gap-6 py-2 text-base font-semibold text-slate-600'>
                <FaRegUser />
                Profil
              </Link>
            </li>
            <li className='cursor-pointer hover:bg-gray-200'>
              <Link to='/leaderboards' className='mx-6 flex w-full items-center gap-6 py-2 text-base font-semibold text-blue-600'>
                <MdLeaderboard /> Leaderboards
              </Link>
            </li>
            <li className='cursor-pointer rounded-b-lg hover:bg-gray-200'>
              <button
                type='button'
                onClick={signOut}
                className='mx-6 flex w-full items-center gap-6 py-2 text-base font-semibold text-red-600'
              >
                <MdLogout />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
