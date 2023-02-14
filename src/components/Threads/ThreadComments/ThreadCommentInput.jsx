import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';

function ThreadCommentInput({ addCommentThread }) {
  const [content, onContentChange] = useInput('');

  return (
    <div className='my-6 flex flex-col gap-2'>
      <p className='text-base font-semibold text-slate-700 lg:text-xl'>Beri Komentar</p>
      <textarea
        value={content}
        onChange={onContentChange}
        className='h-32 w-full resize-none rounded-md border-2 border-slate-700 p-2 text-sm outline-none md:text-base'
      ></textarea>
      <button
        className='w-full rounded-md bg-slate-700 py-1 text-sm text-white hover:bg-slate-600 active:bg-slate-500 md:text-base'
        onClick={() => addCommentThread({ content })}
      >
        Kirim
      </button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  addCommentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
