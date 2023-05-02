import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header/Header';
import Home from './containers/home/Home';
import AllUsers from './containers/users/all-users/AllUsers';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import UserProfile from './containers/users/profileUser/ProfileUser';

function App() {

  return (
    <>
    <BrowserRouter>
          <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/users" element={<AllUsers />} />
             <Route path="/profile" element={<UserProfile />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
          </Routes>
          {/* Footer */}
       </BrowserRouter>
  </>
  )
}

export default App
