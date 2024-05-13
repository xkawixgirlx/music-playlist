import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import PlayListPage from '../PlayListPage/PlayListPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path='/auth' element={<AuthPage setUser={setUser} />} />
            <Route path='/playlist' element={<PlayListPage />} />
            {/* additional Routes... */}
            <Route path="/*" element={<Navigate to="/auth" />} />
          </Routes>
        </>
    </main>
  );
}
