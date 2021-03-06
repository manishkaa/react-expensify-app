import React from 'react';
import { BrowserRouter, Route, Switch,Link, NavLink} from "react-router-dom";
import ExpenseDashboardPage from '../components/expense';
import AddExpensePage from '../components/addexpense';
import EditExpensePage from '../components/editexpense';
import HelpPage from '../components/help';
import Header from '../components/headers';
import NotFoundPage from '../components/notfound';
const AppRouter = () =>(
  <BrowserRouter>
     <div>
       <Header />
          <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/edit/:id" component={EditExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route component={NotFoundPage}/>
          </Switch>
     </div>
  </BrowserRouter>
);
export default AppRouter;
