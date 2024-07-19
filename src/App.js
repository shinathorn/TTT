import logo from './logo.svg';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Counter,
Homepage} from './view/index.js'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
          path='/Home'
          element={<Counter/>}
          />
          <Route
          exact path='/test'
          element="hi"
          />
        </Routes>        
      </Router>

    </div>
  );
}

export default App;
