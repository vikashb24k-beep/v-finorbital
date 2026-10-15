import React from "react";

import Dashboard from "./Dashboard";
import { GeneralContextProvider } from "./GeneralContext";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <GeneralContextProvider>
        <Dashboard />
      </GeneralContextProvider>
    </>
  );
};

export default Home;
