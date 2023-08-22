import { Route, Routes, } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar/navbar';
import NavMushie from './components/navbar/navbarTwo/navMushie';
import Projects from './components/projectRank/projectRank';
import ProjectsMinted from './components/projectsMinted/projectsMinted';
import UpcomingProjects from './components/upcomingProject/upcomingProject';
import axios from "axios"

// axios.defaults.baseURL= process.env.REACT_APP_API
axios.defaults.baseURL= "http://localhost:2500"
export default function Landing(){
    return(
        <>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='projectsMinted' element={<ProjectsMinted/>}/>
            <Route path='upcomingProjects' element={<UpcomingProjects/>}/>
        </Routes>
        </>
    )
}