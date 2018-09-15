import genres from '../../reducers/genres';
import { GENRES_SUCCESS, TOGGLE_GENRE } from '../../actions/constants';

test('return state on non-action', () => {
  expect(genres([], {})).toEqual([]);
});

test('genres receive', () => {
  expect(
    genres([], {
      type: GENRES_SUCCESS,
      payload: {
        data: ['Electronic dance music', 'Musical theatre'],
      },
    })
  ).toEqual([
    { el: 'Electronic dance music', checked: false, id: 0 },
    { el: 'Musical theatre', checked: false, id: 1 },
  ]);
});

test('genres toggle', () => {
  expect(
    genres([{ el: 'Electronic dance music', checked: false, id: 0 }], {
      type: TOGGLE_GENRE,
      payload: {
        id: 0,
        value: false,
        data: [{ el: 'Electronic dance music', checked: false, id: 0 }],
      },
    })
  ).toEqual([{ el: 'Electronic dance music', checked: true, id: 0 }]);
});
