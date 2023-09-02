import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Importing all components
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
/* ------------------------------ */

//Importing all functions

const App = () => {

  const {pathname} = useLocation();
  return (
    <>
    {/* Render Nav only if not at "/" */}
    {pathname !== '/' && <Nav />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokemon/:id" element={<Detail />} />
    </Routes>
    </>
  )
};

export default App
