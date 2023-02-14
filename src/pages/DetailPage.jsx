import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail, asyncAddThreadComment } from '../states/threadDetail/action';
import { BiArrowToTop } from 'react-icons/bi';
import ThreadCommentInput from '../components/Threads/ThreadComments/ThreadCommentInput';
import ThreadCommentList from '../components/Threads/ThreadComments/ThreadCommentList';
import ThreadDetail from '../components/Threads/ThreadDetail';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddCommentThread = ({ content }) => {
    dispatch(asyncAddThreadComment({ threadId: id, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div className='container my-2'>
      <div className='mx-auto my-4 w-4/5 rounded-lg bg-white p-8'>
        <ThreadDetail {...threadDetail} />
        <ThreadCommentInput addCommentThread={onAddCommentThread} />
        <ThreadCommentList comments={threadDetail.comments} />
      </div>
      <button
        onClick={scrollToTop}
        className='fixed bottom-10 right-11 h-8 w-8 rounded-full bg-slate-800 text-white md:h-10 md:w-10 lg:h-12 lg:w-12'
      >
        <BiArrowToTop className='m-auto h-4/5 w-4/5' />
      </button>
    </div>
  );
}

export default DetailPage;
