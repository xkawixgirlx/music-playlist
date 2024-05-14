import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import PlayListPage from '../PlayListPage/PlayListPage';
import PlayListDetails from '../PlayListDetailsPage/PlayListDetailsPage';
import VideoPageList from '../VideoListPage/VideoListPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path='/auth' element={<AuthPage setUser={setUser} />} />
          <Route path='/playlists' element={<PlayListPage />} />
          <Route path='/playlists/:playlistName' element={<PlayListDetails setUser={setUser} />} />
          <Route path='/videos' element={<VideoPageList />} />
          {/* additional Routes... */}
          <Route path="/*" element={<Navigate to="/auth" />} />
        </Routes>
      </>
    </main>
  );
}
