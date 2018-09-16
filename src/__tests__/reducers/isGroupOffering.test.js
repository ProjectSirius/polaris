import isGroupOffering from '../../reducers/isGroupOffering';
import { CREATE_GROUP_OFFER } from '../../actions/constants';

test('return state on non-action', () => {
  expect(isGroupOffering(false, {})).toEqual(false);
});

test('create group offer', () => {
  expect(isGroupOffering(false, { type: CREATE_GROUP_OFFER })).toEqual(true);
});
