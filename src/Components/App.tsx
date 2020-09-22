import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { loadHotels } from '../Store/actions';
import { HotelType, IAppState, ThunkDispatchType } from '../utils/types';
import CardDetails from './Card-details';
import Header from './Header';
import Main from './Main';

const App = () => {
  const dispatch = useDispatch<ThunkDispatchType>();
  const hotels = useSelector<IAppState, HotelType[]>(state => state.hotels);

  useEffect(() => {
    dispatch(loadHotels());
  }, [dispatch]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact render={() => <Main/>}/>
        <Route path='/appartmens/:id' exact render={(props) => {
          return <CardDetails hotel={hotels.find((elem) => elem.id === Number(props.match.params.id))}/>;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
