import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form autoComplete='false' className='m-auto mx-3 flex flex-col justify-center gap-4 rounded-xl bg-white p-10 '>
      <h1 className='text-center text-xl font-bold lg:text-2xl'>DAFTAR AKUN</h1>
      <label htmlFor='username' className='flex flex-col gap-2 text-lg font-semibold lg:text-xl'>
        Username
        <input
          type='text'
          value={name}
          onChange={onNameChange}
          className='w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900'
          placeholder='Masukan Username'
        />
      </label>
      <label htmlFor='email' className='flex flex-col gap-2 text-lg font-semibold lg:text-xl'>
        Email
        <input
          type='email'
          value={email}
          onChange={onEmailChange}
          className='w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900'
          placeholder='Masukan Email'
        />
      </label>
      <label htmlFor='password' className='flex flex-col gap-2 text-lg font-semibold lg:text-xl'>
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
        className='bg-slate-800 p-2 text-center font-semibold text-slate-200 hover:bg-slate-700 active:bg-slate-600 active:text-white'
        onClick={() => register({ name, email, password })}
      >
        Daftar
      </button>
      <p>
        Sudah punya akun?{' '}
        <Link to='/' className='text-blue-900 underline'>
          Masuk di sini.
        </Link>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
