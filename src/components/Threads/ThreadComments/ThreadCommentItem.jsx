import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../../utils';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function ThreadCommentItem({ content, createdAt, owner, upVotesBy, downVotesBy }) {
  return (
    <div className='border-b border-slate-400 py-4 text-sm text-slate-700 md:text-base'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <img className='w-6 rounded-full md:w-9' src={owner.avatar} />
          <p className='font-semibold'>{owner.name}</p>
        </div>
        <p className='font-light'>{postedAt(createdAt)}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: content }} className='mt-2 text-sm lg:text-base'></p>

      <div className='mt-4 flex items-center gap-3 text-sm md:text-base'>
        <p className='flex items-center gap-[2px] text-xs md:text-sm'>
          <button type='button'>
            <AiOutlineLike className='text-lg md:text-xl' />
          </button>{' '}
          {upVotesBy.length}
        </p>
        <p className='flex items-center gap-[2px] text-xs md:text-sm'>
          <button type='button'>
            <AiOutlineDislike className='text-lg md:text-xl' />
          </button>{' '}
          {downVotesBy.length}
        </p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
