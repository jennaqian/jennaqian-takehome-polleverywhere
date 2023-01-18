import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.js"
import ParticipantsPage from "./pages/ParticipantsPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import WinnersPage from "./pages/WinnersPage.js"
import "../src/App.css"

export default function App (){
  return(
    <Router>

      <Link to="/" className='title'>
        <h1>RAFFLE APP</h1>
      </Link>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raffles/:id" element={<RegisterPage />} />
          <Route path="/raffles/:id/participants" element={<ParticipantsPage />} />
          <Route path="/raffles/:id/winner" element={<WinnersPage />} />
      </Routes>
      
    </Router>
  )
};
