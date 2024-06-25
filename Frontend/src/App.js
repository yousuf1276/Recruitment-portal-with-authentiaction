import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup';
import Profile from './components/Dashboard/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>

        <Route path='/home'element={<Signin/>}/>
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/'element={<Signin/>}/>
        <Route path='/Signup'element={<Signup/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
