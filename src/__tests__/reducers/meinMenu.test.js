import mainMenu from '../../reducers/mainMenu';
import { TOGGLE_MENU } from '../../actions/constants';

test('return state on non-action', () => {
  expect(mainMenu(false, {})).toEqual(false);
});

test('toggle menu', () => {
  expect(
    mainMenu(false, {
      type: TOGGLE_MENU,
      payload: {
        isOpen: true,
      },
    })
  ).toEqual(true);
});
