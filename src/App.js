import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/toy-index" element={<ToyIndex />} />
                {/* <Route path="/note" element={<NoteIndex />} /> */}
            </Routes>
    </div>
  );
}

export default App;
