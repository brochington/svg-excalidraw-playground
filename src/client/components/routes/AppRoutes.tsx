import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SVGToJSONPage from 'pages/SvgToJSONPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Route path="/svg-to-json">
        <SVGToJSONPage />
      </Route>
    </Router>
  );
};

export default AppRoutes;
