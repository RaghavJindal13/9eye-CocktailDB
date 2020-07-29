import React, {Fragment} from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import FilterMenu from './components/filter/filterMenu';


function App() { 

  return (
    <BrowserRouter>
    
      
      <div className="App">
        <Route path="/" render={props => (
          <Fragment>
            <FilterMenu {...props} />
             
          </Fragment>
        )} />
      
        
      </div>
      </BrowserRouter>
  );
}

export default App;
