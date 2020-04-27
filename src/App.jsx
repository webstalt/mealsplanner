import React, { useEffect } from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WeekScreen } from './pages/WeekScreen';
import { DayEdit } from './pages/DayEdit';
import { getDaysData } from './redux/weekScreen/weekScreen.actions';

const isDataLoadedSelector = store => store.weekScreen.isDataLoaded;

export const App = () => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(isDataLoadedSelector);

  useEffect(() => {
    dispatch(getDaysData());
  });

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WeekScreen />
          </Route>
          <Route path="/day-edit">
            <DayEdit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
