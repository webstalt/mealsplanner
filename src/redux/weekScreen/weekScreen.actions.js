import initialData from '../../data.json';

export const SET_DAYS_DATA = 'SET_DAYS_DATA';

export const setDaysData = payload => ({
  type: SET_DAYS_DATA,
  payload,
});

export const getDaysData = () => dispatch => {
  Promise.resolve(initialData)
    .then(result => {
      setTimeout(dispatch(setDaysData(result)), 3000);
    })
    .catch(error => console.error(error));
};
