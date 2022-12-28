import React from 'react';
import axios from "axios";
import HomePageTablet from "./Component/HomaPageTablet";
// require("dotenv").config()


function App() {
    // @ts-ignore
    axios.defaults.headers.common['ApiKey'] = process.env.APIKEY
    
  return (
    <div className="App">
        <HomePageTablet/>
    </div>
  );
}

export default App;
