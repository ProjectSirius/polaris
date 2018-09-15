import isDataSent from '../../reducers/isDataSent';
import { DATA_SEND_SUCCESS, DATA_EDIT_REDIRECT } from '../../actions/constants';

test('return state on non-action', () => {
  expect(isDataSent(false, {})).toEqual(false);
});

test('data sent success', () => {
  expect(isDataSent(false, { type: DATA_SEND_SUCCESS })).toEqual(true);
});

test('data sent redirect success', () => {
  expect(isDataSent(true, { type: DATA_EDIT_REDIRECT })).toEqual(false);
});
