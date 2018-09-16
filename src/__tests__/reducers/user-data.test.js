import userData from '../../reducers/user-data';

import {
  USER_DATA_SUCCESS,
  DATA_DELETE_SUCCESS,
  DATA_EDIT_SUCCESS,
} from '../../actions/constants';

const data = {
  createdAt: '2018-09-10T10:20:18.680Z',
  createdBy: '40',
  description:
    "We're hip-hop battle league who give you a chance to be a popular!!",
  fields: [],
  id: '80',
  modifiedBy: '40',
  title: 'Versus Battle League',
  updatedAt: '2018-09-11T06:19:45.018Z',
};

test('return state on non-action', () => {
  expect(userData([], {})).toEqual([]);
});

test('return USER_DATA_SUCCESS', () => {
  expect(
    userData([], {
      type: USER_DATA_SUCCESS,
      payload: {
        data: [data],
      },
    })
  ).toEqual([data]);
});

test('DATA_DELETE_SUCCESS', () => {
  expect(
    userData([data], {
      type: DATA_DELETE_SUCCESS,
      payload: {
        data: [],
      },
    })
  ).toEqual([]);
});

test('DATA_EDIT_SUCCESS', () => {
  expect(
    userData([data], {
      type: DATA_EDIT_SUCCESS,
      payload: {
        data: [data],
        item: { data },
      },
    })
  ).toEqual([data]);
});
