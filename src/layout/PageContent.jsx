import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ContactPages from '../pages/ContactPages';
import AboutPages from '../pages/AboutPages';
import PricingPage from '../pages/PricingPage';
import TeamPage from '../pages/TeamPage';

const PageContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path ="/contact" component={ContactPages} />
          <Route path ="/about" component={AboutPages} />
          <Route path ="/pricing" component ={PricingPage}/>
          <Route path="/team" component={TeamPage}/>
        </Switch>
      </main>
    </div>
  );
};

export default PageContent;