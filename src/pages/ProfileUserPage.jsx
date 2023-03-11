import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import PropTypes from 'prop-types';

function ProfileUserPage({ authUser }) {
  const [profileUser, setProfileUser] = useState();
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
    if (leaderboards !== null) {
      const filterBoard = leaderboards.filter(({ user }) => {
        if (user?.email === authUser?.email) {
          return true;
        } else {
          return false;
        }
      });

      setProfileUser(filterBoard);
    }
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <div className='container'>
      <div className='m-auto my-10 w-4/5 rounded-lg bg-white py-10 sm:px-20 lg:w-3/5'>
        <h1 className='text-center text-xl font-bold md:text-2xl lg:text-3xl'>Profile Pengguna</h1>
        <div className='flex flex-col lg:my-10 lg:flex-row lg:items-center lg:justify-center lg:gap-1'>
          <div className='m-auto my-10 h-32 w-32 lg:m-0 lg:h-72 lg:w-72'>
            <img src={authUser?.avatar} alt={authUser.name} className='h-full w-full rounded-lg' />
          </div>
          <div className='flex flex-col gap-2 px-8'>
            <div className='border-b border-slate-600 p-2 text-sm lg:border-none lg:p-1 lg:text-lg'>
              <h2 className='text-base font-semibold lg:text-xl'>Nama:</h2>
              <p>{authUser?.name}</p>
            </div>
            <div className='border-b border-slate-600 p-2 text-sm lg:border-none lg:p-1 lg:text-lg'>
              <h2 className='text-base font-semibold lg:text-xl'>ID:</h2>
              <p>{authUser?.id}</p>
            </div>
            <div className='border-b border-slate-600 p-2 text-sm lg:border-none lg:p-1 lg:text-lg'>
              <h2 className='text-base font-semibold lg:text-xl'>Email:</h2>
              <p>{authUser?.email}</p>
            </div>
            <div className='border-b border-slate-600 p-2 text-sm lg:border-none lg:p-1 lg:text-lg'>
              <h2 className='text-base font-semibold lg:text-xl'>Skor yang di dapat:</h2>
              <p>{!profileUser ? 0 : profileUser[0]?.score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ProfileUserPage.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default ProfileUserPage;
