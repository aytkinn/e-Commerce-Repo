import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const PageContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </main>
    </div>
  );
};

export default PageContent;