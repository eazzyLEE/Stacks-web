import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './layouts/register';
import StackId from './layouts/stack-id';
import StackCards from './layouts/stack-cards';

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={Landing} /> */}
      <Route exact path={["/", "/register"]} component={Register} />
      <Route exact path={"/stack-id"} component={StackId} />
      <Route exact path={"/cards"} component={StackCards} />
    </Router>
  );
}

export default App;
