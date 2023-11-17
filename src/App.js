import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import GlobalStyle from './Components/GlobalStyle';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
    <Router>
      <Routes>
        
        <Route path="/" exact element={<Main/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
