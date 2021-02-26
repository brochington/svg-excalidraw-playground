import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SVGToJSONPage from 'pages/SVGtoJSONPage/SVGToJSONPage';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/svg-to-json">
            <SVGToJSONPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
