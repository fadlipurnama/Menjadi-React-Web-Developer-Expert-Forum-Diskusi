import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem from './ThreadCommentItem';

function ThreadCommentList({ comments }) {
  return (
    <div className='mt-10'>
      <h1 className='text-lg font-semibold lg:text-xl'>Komentar ({comments.length})</h1>
      {comments.map((comment) => (
        <ThreadCommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.array,
};

export default ThreadCommentList;
