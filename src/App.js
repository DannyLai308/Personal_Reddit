import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import FavouritesPage from './FavouritesPage';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>

          <Route path="/favourites">
            <FavouritesPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
