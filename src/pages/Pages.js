import {Route} from 'react-router-dom';
import Withdraw from "./Withdraw";

const Pages =() =>{
return(
    <header>
  <Route path ="/withdraw">
  <Withdraw />
  </Route>
    </header>
);

}

export default  Pages;