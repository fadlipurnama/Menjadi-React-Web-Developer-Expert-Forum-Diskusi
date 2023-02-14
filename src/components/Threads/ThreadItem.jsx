import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment } from 'react-icons/ai';

function ThreadItem({ id, title, body, category, upVotesBy, downVotesBy, createdAt, totalComments, user }) {
  return (
    <div className='m-auto border-b border-slate-400 py-4'>
      <p className='mb-2 w-min rounded-md border border-slate-700 px-2 py-1 text-xs md:text-base'>#{category}</p>
      <Link to={`/threads/${id}`}>
        <p className='text-base font-semibold text-indigo-800 md:text-lg'>{title}</p>
      </Link>
      <p
        className='my-1 text-xs font-normal md:text-sm'
        dangerouslySetInnerHTML={{ __html: body.slice(0, 300) + (body.length > 300 ? '...' : '') }}
      ></p>
      <div className='mt-3 flex gap-2 text-xs font-light md:text-sm'>
        <p className='flex items-center gap-1'>
          <button type='button'>
            <AiOutlineLike className='text-base md:text-lg' />
          </button>{' '}
          {upVotesBy.length}
        </p>
        <p className='flex items-center gap-1'>
          <button type='button'>
            <AiOutlineDislike className='text-base md:text-lg' />
          </button>{' '}
          {downVotesBy.length}
        </p>
        <p className='flex items-center gap-1'>
          <AiOutlineComment className='text-base md:text-lg' />
          {totalComments}
        </p>
        <p>{postedAt(createdAt)} Dibuat oleh</p>
        <p className='font-medium'>{user.name}</p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
