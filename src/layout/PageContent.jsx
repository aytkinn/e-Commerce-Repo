import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PageContent = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 w-full">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default PageContent;