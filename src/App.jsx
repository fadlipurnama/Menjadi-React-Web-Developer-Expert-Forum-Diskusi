import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import ForumDiskusi from './pages/ForumDiskusi';
import Leaderboards from './pages/Leaderboards';
import LoginPage from './pages/LoginPage';
import ProfileUserPage from './pages/ProfileUserPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar authUser={authUser} signOut={onSignOut} />
      <main>
        <Loading />
        <Routes>
          <Route path='/' element={<ForumDiskusi />} />
          <Route path='/threads/:id' element={<DetailPage />} />
          <Route path='/create' element={<CreateThreadPage />} />
          <Route path='/profile' element={<ProfileUserPage authUser={authUser} />} />
          <Route path='/leaderboards' element={<Leaderboards />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
