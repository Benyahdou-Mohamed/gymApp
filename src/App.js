import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar'
import Home from './pages/Home.js'
import ExerciceDetail from './pages/ExerciceDetail'

function App() {
    return ( <Box >
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercice/:id" element={<ExerciceDetail/>}/>
        </Routes>
        
        </Box>
    );
}

export default App;