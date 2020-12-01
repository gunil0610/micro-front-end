import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />;
      </div>
    </BrowserRouter>
  );
};

export default App;
