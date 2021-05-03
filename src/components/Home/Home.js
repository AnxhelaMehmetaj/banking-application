import React from 'react';


import classes from './Home.module.css';
import {Route} from "react-router-dom";
import Bank from "../../Pages/Bank";
import Summary from "../../Pages/Summary";


const Home = () => {
    return (
        <div className={classes.home}>
            <h1>Welcome back!</h1>
            <Route path='/bank'>
                <Bank/>
            </Route>

          <Summary/>

        </div>
    );
};

export default Home;