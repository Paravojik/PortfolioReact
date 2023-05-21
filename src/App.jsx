
import { useState } from 'react';
import './App.css';
import AboutPage from './Components/AboutPage/AboutPage';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';

function App() {
  let [wichVisiblePage,setWichVisiblePage]=useState(1)
  function wichVisible(value){
    setWichVisiblePage(value)
  }
  return (
    <div className="App">
      <Header wichVisible={wichVisible}/>
      <MainPage wichVisiblePage={wichVisiblePage}/>
      <AboutPage wichVisiblePage={wichVisiblePage}/>
      <ProjectsPage wichVisiblePage={wichVisiblePage}/>
    </div>
  );
}

export default App;
