import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//components 
import AddChequeDetail from '../components/Cheque/AddChequeDetail';
const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={AddChequeDetail}/>
            </Switch>
        </Router>
    )
};


export default Routes;