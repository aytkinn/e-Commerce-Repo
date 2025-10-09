import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PageContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </div>
  );
};

export default PageContent;