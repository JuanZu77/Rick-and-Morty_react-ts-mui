
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login/login";
import { RouterLayout } from "./common/RouterLayout";

export const AppRouter:React.FC = ()=> {

    return(
        <Routes>
            {/* <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/> */}

            <Route path="/" element={<RouterLayout/>}>
                    
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>

            </Route>
         {/* <Route></Route> otras rutas que no incluyan el NavBar*/}
        </Routes>
    )

}