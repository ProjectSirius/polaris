import isEditing from '../../reducers/isEditing';
import {
  DATA_EDIT_SUCCESS,
  DATA_EDIT_FAILURE,
  DATA_EDIT_REQUEST,
} from '../../actions/constants';

test('return state on non-action', () => {
  expect(isEditing(false, {})).toEqual(false);
});

test('is editing success', () => {
  expect(isEditing(false, { type: DATA_EDIT_SUCCESS })).toEqual(true);
});

test('is editing request', () => {
  expect(isEditing(false, { type: DATA_EDIT_REQUEST })).toEqual(true);
});

test('is editing failure', () => {
  expect(isEditing(true, { type: DATA_EDIT_FAILURE })).toEqual(false);
});
