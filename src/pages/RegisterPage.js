import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEarlybirds } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="lg:flex">
      <div className="hidden h-screen w-full flex-col bg-gradient-to-tr from-slate-600 via-slate-900 to-slate-800 px-4 py-10 lg:flex">
        <div className="flex w-36 cursor-pointer items-center rounded-full py-2 px-5 font-semibold text-slate-200 hover:shadow-sm hover:shadow-slate-400">
          <Link to="/.">
            <button type="button" className="flex items-center gap-2 text-lg">
              <IoIosArrowBack className="h-6 w-6" />
              Kembali
            </button>
          </Link>
        </div>
        <FaEarlybirds className="m-auto h-40 w-40 text-slate-200" />
      </div>
      <div className="flex h-screen w-full flex-col px-4 py-10">
        <div className="flex w-36 cursor-pointer items-center rounded-full py-2 px-5 font-semibold text-slate-900 hover:shadow-md lg:hidden">
          <Link to="/.">
            <button type="button" className="flex items-center gap-2 text-lg">
              <IoIosArrowBack className="h-6 w-6" />
              Kembali
            </button>
          </Link>
        </div>
        <form className="m-auto mx-3 flex flex-col justify-center gap-4 rounded-xl bg-white p-10 lg:h-3/5">
          <label htmlFor="username" className="flex flex-col gap-2 text-lg font-semibold lg:text-xl">
            Username
            <input
              type="text"
              className="w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900"
              placeholder="Masukan Username"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2 text-lg font-semibold lg:text-xl">
            Email
            <input
              type="email"
              className="w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900"
              placeholder="Masukan Email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2 text-lg font-semibold lg:text-xl">
            Kata Sandi
            <input
              type="password"
              className="w-full rounded-lg border border-slate-600 p-2 text-base font-normal outline-slate-900"
              placeholder="Masukan Kata Sandi"
            />
          </label>
          <button type="submit" className="bg-slate-800 p-2 text-center font-semibold text-slate-200 hover:bg-slate-700 active:bg-slate-600 active:text-white">
            Daftar
          </button>
          <p>
            Sudah punya akun?
            {' '}
            <Link to="/login" className="text-blue-900 underline">
              Masuk di sini.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
