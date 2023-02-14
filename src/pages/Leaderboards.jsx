import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardsList from '../components/LeaderboardsList';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import { BiArrowToTop } from 'react-icons/bi';

function Leaderboards() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <div className='container'>
      <div className='mx-auto my-5 w-4/5 rounded-lg bg-white p-8'>
        <h1 className='mb-8 text-xl font-bold lg:text-3xl'>Klasmen Pengguna Aktif</h1>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-base font-semibold text-indigo-800 md:text-lg lg:text-xl'>Pengguna</h2>
          <h2 className='text-base font-semibold text-indigo-800 md:text-lg lg:text-xl'>Skor</h2>
        </div>
        <div className='flex flex-col gap-4'>
          {leaderboards.map((leaderboard) => (
            <LeaderboardsList key={leaderboard.user.id} {...leaderboard} />
          ))}
        </div>
        <button
          onClick={scrollToTop}
          className='fixed bottom-10 right-11 h-8 w-8 rounded-full bg-slate-800 text-white md:h-10 md:w-10 lg:h-12 lg:w-12'
        >
          <BiArrowToTop className='m-auto h-4/5 w-4/5' />
        </button>
      </div>
    </div>
  );
}

export default Leaderboards;
