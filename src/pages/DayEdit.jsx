import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  // IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';
import { setDaysData } from '../redux/weekScreen/weekScreen.actions';
import './DayEdit.scss';

const daysSelector = store => store.weekScreen.days;

export const DayEdit = () => {
  const allData = useSelector(daysSelector);
  const location = useLocation();
  const currentDayData = allData.find(item => item.id === location.state);
  const dispatch = useDispatch();

  const refreshData = days => dispatch(setDaysData({ days }));

  const inputChangeHandler = event => {
    const { name: mealName, value } = event.currentTarget;
    const days = allData.map(item => {
      if (item.id === currentDayData.id) {
        return {
          ...item,
          data: {
            ...item.data,
            [mealName]: value,
          },
        };
      }
      return item;
    });
    refreshData(days);
  };

  const removeClickHandler = mealName => {
    const days = allData.map(item => {
      if (item.id === currentDayData.id) {
        const currentItem = { ...item };
        delete currentItem.data[mealName];
        return currentItem;
      }
      return item;
    });
    refreshData(days);
  };

  const BackLink = React.memo(() => (
    <div className="day-edit__back-link"><Link component={RouterLink} to="/">Back</Link></div>
  ), []);

  return (
    <>
      <BackLink />
      <h2>{currentDayData.name}</h2>
      {Object.keys(currentDayData.data).map(mealName => (
        <div className="day-edit__meal" key={mealName}>
          <div className="day-edit__meal-name-wrap">
            <h2 className="day-edit__meal-name">{mealName}</h2>
            {mealName === 'snack 1' || mealName === 'snack 2' ? (
              <IoIosRemoveCircleOutline onClick={() => removeClickHandler(mealName)} />
            ) : ''}
          </div>
          <input
            className="day-edit__meal-description"
            type="text"
            name={mealName}
            value={currentDayData.data[mealName]}
            onChange={event => inputChangeHandler(event)}
          />
        </div>
      ))}
    </>
  );
};
