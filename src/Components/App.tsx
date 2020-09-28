import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { checkAuth, loadHotels } from '../Store/actions';
import { HotelType, IAppState, ThunkDispatchType } from '../utils/types';
import CardDetails from './Card-details';
import Header from './Header';
import Main from './Main';

const App = () => {
  const dispatch = useDispatch<ThunkDispatchType>();
  const hotels = useSelector<IAppState, HotelType[]>(state => state.hotels);
  const activeFilter = useSelector<IAppState, string>(state => state.activeFilter);

  useEffect(() => {
    dispatch(loadHotels());
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact render={() => <Main/>}/>
        <Route path='/appartmens/:id' exact render={(props) => {
          return <CardDetails 
            hotel={hotels.find((elem) => elem.id === Number(props.match.params.id))}
            hotels={hotels.filter(hotel => hotel.city.name === activeFilter)}
          />;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
