import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className='my-2 flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <label className='text-base font-semibold md:text-lg'>Judul</label>
        <input
          type='text'
          value={title}
          onChange={onTitleChange}
          placeholder='Tuliskan Judul'
          className='w-full rounded-lg border border-slate-600 py-1 px-2 text-sm font-normal outline-slate-900 md:text-base'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-base font-semibold md:text-lg'>Kategori</label>
        <input
          type='text'
          value={category}
          onChange={onCategoryChange}
          placeholder='Tuliskan Kategori'
          className='w-full rounded-lg border border-slate-600 py-1 px-2 text-sm font-normal outline-slate-900 md:text-base'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-base font-semibold md:text-lg'>Diskusi</label>
        <textarea
          value={body}
          onChange={onBodyChange}
          placeholder='Tuliskan Diskusi Kamu'
          className='h-44 w-full resize-none rounded-md border-2 border-slate-700 p-2 text-sm outline-none md:text-base'
        ></textarea>
      </div>
      <button
        onClick={() => addThread({ title, category, body })}
        className='w-full rounded-md bg-slate-700 py-1 text-sm text-white hover:bg-slate-600 active:bg-slate-500 md:text-base'
      >
        Buat
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
