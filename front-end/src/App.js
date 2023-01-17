import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import ParticipantsPage from "./pages/ParticipantsPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import WinnersPage from "./pages/WinnersPage.js"

export default function App (){
  return(
    <Router>

      <Link to="/">
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
