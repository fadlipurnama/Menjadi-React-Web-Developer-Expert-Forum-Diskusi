import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='m-auto mx-3 flex flex-col justify-center gap-4 rounded-xl bg-white p-10'>
      <h1 className='text-center text-xl font-bold lg:text-2xl'>MASUK</h1>
      <label className='flex flex-col gap-2 text-lg font-semibold lg:text-xl'>
        Email
        <input
          type='email'
          value={email}
          onChange={onEmailChange}
          className='w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900'
          placeholder='Masukan Email'
        />
      </label>
      <label className='flex flex-col gap-2 text-lg font-semibold lg:text-xl'>
        Kata Sandi
        <input
          type='password'
          value={password}
          onChange={onPasswordChange}
          className='w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900'
          placeholder='Masukan Kata Sandi'
        />
      </label>
      <button
        type='button'
        onClick={() => login({ email, password })}
        className='bg-slate-800 p-2 text-center font-semibold text-slate-200 hover:bg-slate-700 active:bg-slate-600 active:text-white'
      >
        Masuk
      </button>
      <p>
        Belum punya akun?{' '}
        <Link to='/register' className='text-blue-900 underline'>
          Daftar di sini.
        </Link>
      </p>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
