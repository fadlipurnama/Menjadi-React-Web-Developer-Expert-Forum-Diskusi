import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardsList({ user, score }) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img className='h-8 w-8 rounded-full md:h-10 md:w-10 lg:h-12 lg:w-12' src={user.avatar} />
        <p className='text-sm md:text-base lg:text-lg'>{user.name}</p>
      </div>
      <p className='text-base md:text-lg lg:text-xl'>{score}</p>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const leaderboardsShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

LeaderboardsList.propTypes = {
  ...leaderboardsShape,
};

export default LeaderboardsList;
