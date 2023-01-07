import React from 'react';
import DMOBookHall from "./Component/DMO/DMOBookHall";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PKOBookHall from "./Component/PKO/PKOBookHall";
import StartPage from "./Component/StartPage";
// require("dotenv").config()


function App() {
    // @ts-ignore
    // axios.defaults.headers.common['ApiKey'] = process.env.APIKEY
    
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<StartPage/>}/>
                <Route path={"/dmo"} element={<DMOBookHall/>}/>
                <Route path={"/pko"} element={<PKOBookHall/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
