import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/Threads/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function CreateThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));

    navigate('/');
  };

  return (
    <div className='container'>
      <div className='mx-auto my-5 w-4/5 rounded-lg bg-white p-8'>
        <h1 className='mb-6 text-xl font-bold lg:text-2xl'>Buat Diskusi Baru</h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}

export default CreateThreadPage;
