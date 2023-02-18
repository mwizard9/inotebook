
import './App.css';
import{
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <NoteState>
    <Router>
    <NavBar/>
    <Alert message="this is alert"/>
    <div className="container">
    <Routes>
    <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/login" element={<Login/>}>
            </Route>
            <Route exact path="/signup" element={<Signup/>}>
            </Route>
    </Routes>
    </div>
    </Router>
    </NoteState>
      
      
    </>
  );
}

export default App;
