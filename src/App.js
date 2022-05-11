import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import { Home } from './components/Home';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/favorites' element={<Favorites/>}/>
     <Route path='/note/:id' element={<NoteDetail/>}/>
     <Route path='/editform/:id' element={<EditForm/>}/>

      </Routes>

      </Router>
   
    </div>
  );
}

export default App;
