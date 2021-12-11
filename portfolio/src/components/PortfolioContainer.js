// export { default as Navigation } from "./Navigation";
// export { default as Footer } from "./Footer";
// export { default as Home } from "./Home";
// export { default as About } from "./About";
// export { default as Contact } from "./Contact";
// export { default as Blog } from "./blog/Blog";
// export { default as Posts } from "./blog/Posts";
// export { default as Post } from "./blog/Post";

import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
//import Card from './Card'
import ContactMe from './pages/ContactMe';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe exact path = '/AboutMe'/>;
    }
    if (currentPage === 'Projects') {
      return <Projects exact path = '/Projects'/>;
    }
    if (currentPage === 'Contact Me') {
      return <ContactMe exact path = '/ContactMe'/>;
  }
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}