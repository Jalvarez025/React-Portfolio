// import * as React from 'react';
// import Card from '@mui/material/Card';
// import NavTabs from './components/NavTabs'
// import styles from './index.css'; 

// export default function CenteredTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (

//     <div className={styles.bigblue}>
//     <NavTabs />
//     <Card />
//     </div>


//   );
// }

import './App.css';
import * as React from "react";
//import { Routes, Route, Link } from "react-router-dom";
//import * as React from "react";
//import { Routes, Route, Link } from "react-router-dom";
import PortfolioContainer from './components/PortfolioContainer';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
//import Card from './Card'
import ContactMe from './pages/ContactMe';
//import PortfoiloContainer from './components/PortfolioContainer';

export default function App() {
    return (
        <div className="App">
            <PortfolioContainer />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<ContactMe />} />
            </Routes>
        </div>

    );
}

