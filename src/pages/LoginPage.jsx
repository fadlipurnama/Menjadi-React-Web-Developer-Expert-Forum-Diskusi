import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className='lg:flex'>
      <div className='flex h-screen w-full flex-col px-4 py-10'>
        <LoginInput login={onLogin} />
      </div>
      <div className='hidden h-screen w-full border bg-gradient-to-tr from-slate-600 via-slate-900 to-slate-800 lg:flex'>
        <FaEarlybirds className='m-auto h-40 w-40 text-slate-200' />
      </div>
    </div>
  );
}

export default LoginPage;
