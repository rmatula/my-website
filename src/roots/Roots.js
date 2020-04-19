import { Route, Switch } from 'react-router-dom';
import React from 'react';

import { PATH_URLS } from '../constants/pathUrls';
import Github from '../components/Github/Github';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Roots = () => {
  return (
    <React.Fragment>
      <Route path={`/${PATH_URLS.ABOUT}`}>
        <About />
      </Route>
      <Route path={`/${PATH_URLS.GITHUB}`}>
        <Github />
      </Route>
      <Route path={`/${PATH_URLS.PROJECTS}`}>
        <Projects />
      </Route>
      <Route path={`/${PATH_URLS.CONTACT}`}>
        <Contact />
      </Route>
    </React.Fragment>
  );
};

export default Roots;
