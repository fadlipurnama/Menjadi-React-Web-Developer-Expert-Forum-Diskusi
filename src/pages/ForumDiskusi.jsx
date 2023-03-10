import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreadsList from '../components/Threads/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { asyncToogleLikeThread } from '../states/threads/action';

function ForumDiskusi() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className='container'>
      <div className='mx-auto my-5 w-4/5 rounded-lg bg-white p-8'>
        <h1 className='pb-2 text-xl font-bold md:text-2xl lg:text-3xl'>Diskusi Tersedia</h1>
        <ThreadsList threads={threadList} />
        <Link to='/create' className='fixed bottom-10 right-11 h-8 w-8 text-slate-700 md:h-10 md:w-10 lg:h-12 lg:w-12'>
          <BsFillPlusCircleFill className='h-full w-full' />
        </Link>
      </div>
    </div>
  );
}

export default ForumDiskusi;
