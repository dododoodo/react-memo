import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Style.scss';
import Memo from './pages/Memo';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/memo">Go to Memo</NavLink>
        </header>
        <main>
          <Routes> 
            <Route path="/memo" element={<Memo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
