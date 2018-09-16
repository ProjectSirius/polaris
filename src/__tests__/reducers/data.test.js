import data from '../../reducers/data';
import { DATA_RECEIVE_SUCCESS } from '../../actions/constants';

const initialValue = { info: {}, totalPages: 0, currentPage: 0 };

test('return state on non-action', () => {
  expect(data(initialValue, {})).toEqual(initialValue);
});

test('DATA_RECEIVE_SUCCESS', () => {
  expect(
    data('', {
      type: DATA_RECEIVE_SUCCESS,
      payload: {
        currentPage: 1,
        info: [{ id: 79 }, { id: 80 }, { id: 81 }],
        selector: undefined,
        totalPages: 2,
      },
    })
  ).toEqual({
    currentPage: 1,
    info: { 79: { id: 79 }, 80: { id: 80 }, 81: { id: 81 } },
    totalPages: 2,
  });
});
