// import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.comonent';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.components';
import Shop from './routes/shop/shop.component';

import './categories.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
