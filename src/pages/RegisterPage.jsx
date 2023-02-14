import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEarlybirds } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div className='lg:flex'>
      <div className='hidden h-screen w-full flex-col bg-gradient-to-tr from-slate-600 via-slate-900 to-slate-800 px-4 py-10 lg:flex'>
        <div className='flex w-36 cursor-pointer items-center rounded-full py-2 px-5 font-semibold text-slate-200 hover:shadow-sm hover:shadow-slate-400'>
          <Link to='/.'>
            <button type='button' className='flex items-center gap-2 text-lg'>
              <IoIosArrowBack className='h-6 w-6' />
              Kembali
            </button>
          </Link>
        </div>
        <FaEarlybirds className='m-auto h-40 w-40 text-slate-200' />
      </div>
      <div className='flex h-screen w-full flex-col px-4 py-10'>
        <div className='mb-6 flex w-36 cursor-pointer items-center rounded-full py-2 px-5 font-semibold text-slate-900 hover:shadow-md lg:hidden'>
          <Link to='/.'>
            <button type='button' className='flex items-center gap-2 text-lg'>
              <IoIosArrowBack className='h-6 w-6' />
              Kembali
            </button>
          </Link>
        </div>
        <RegisterInput register={onRegister} />
      </div>
    </div>
  );
}

export default RegisterPage;
