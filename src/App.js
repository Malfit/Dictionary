import React from 'react'; // { Suspense } 
import { 
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import routes from './routes';
// import Loader from './utils/Loader';

const App = () => (
  <>
    <Router>
      <>
          <Switch>
            {
              routes.map(route => (
                <Route
                  key={route.toString()}
                  path={route.path}
                  exact={route.exact}                 
                >
                  {route.component}
                </Route>
              ))
            }
          </Switch>   
      </>   
    </Router>
  </>
);

export default App;


