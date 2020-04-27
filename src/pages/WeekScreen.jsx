import React from 'react';
import { Container, Card, Link as MaterialLink } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './WeekScreen.scss';

const daysSelector = store => store.weekScreen.days;

export const WeekScreen = () => {
  const daysData = useSelector(daysSelector);
  const history = useHistory();

  function openDayDetails(id) {
    history.push(`/day-edit/:${id}`, id);
  }

  function showIngredientsHandler(e) {
    e.stopPropagation();
  }

  return (
    <Container className="wrapper">
      {daysData.map(day => (
        <Card key={day.id} className="day" onClick={() => openDayDetails(day.id)}>
          <h2 className="day__title">{day.dayName}</h2>
          {Object.keys(day.data).map(mealName => (
            <div key={mealName} className="meal">
              <h3 className="meal__title">
                {mealName}
              </h3>
              <span className="meal__name">
                {day.data[mealName]}
              </span>
              <MaterialLink
                className="meal__ingredients"
                onClick={showIngredientsHandler}
              >
                Show ingredients
              </MaterialLink>
            </div>
          ))}
        </Card>
      ))}
    </Container>
  );
};
