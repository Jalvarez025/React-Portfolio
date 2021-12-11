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
import PortfolioContainer from './components/PortfolioContainer';
//import PortfoiloContainer from './components/PortfolioContainer';

export default function App() {
  return (
    <div className="portfolio-app">
      <PortfolioContainer />
    </div>
  );
}

