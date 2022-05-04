import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes } from 'react-router-dom'
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' element={<CharactersList />}></Route>
        <Route strict exact path='/:id' element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
