import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function ThreadDetail({ title, body, createdAt, upVotesBy, downVotesBy, owner, category }) {
  return (
    <div>
      <p className='mb-2 w-min rounded-md border border-slate-700 px-2 py-1 text-xs md:text-base'>#{category}</p>
      <h1 className='pb-2 text-xl font-bold md:text-2xl lg:text-3xl'>{title}</h1>
      <p className='my-1 text-sm font-normal md:text-base lg:text-lg' dangerouslySetInnerHTML={{ __html: body }}></p>
      <div className='mt-4 flex items-center gap-2 text-xs sm:text-sm md:text-base'>
        <div className='flex gap-3'>
          <p className='flex items-center gap-[2px] text-xs md:text-sm'>
            <button type='button'>
              <AiOutlineLike className='text-base sm:text-lg md:text-xl' />
            </button>{' '}
            {upVotesBy.length}
          </p>
          <p className='flex items-center gap-[2px] text-xs md:text-sm'>
            <button type='button'>
              <AiOutlineDislike className='text-base sm:text-lg md:text-xl' />
            </button>{' '}
            {downVotesBy.length}
          </p>
        </div>
        <p>Dibuat oleh </p>
        <img className='h-4 w-4 rounded-full md:h-6 md:w-6' src={owner.avatar} />
        <p className='font-medium'>{owner.name}</p>
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadDetail;
