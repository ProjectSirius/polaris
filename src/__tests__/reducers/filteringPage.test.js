import filteringPage from '../../reducers/filteringPage';
import {
  UPD_FILTER_BAR,
  UPD_RATING,
  TOGGLE_FILTER,
} from '../../actions/constants';

const initialValue = {
  filterBar: 'table',
  rating: 1,
  isOpenFilterMenu: false,
};

test('return state on non-action', () => {
  expect(filteringPage(initialValue, {})).toEqual(initialValue);
});

test('toggle filter', () => {
  expect(
    filteringPage(initialValue, {
      type: TOGGLE_FILTER,
      payload: { isOpen: true },
    })
  ).toEqual({
    filterBar: 'table',
    rating: 1,
    isOpenFilterMenu: true,
  });
});

describe('change views', () => {
  test('list', () => {
    expect(
      filteringPage(initialValue, {
        type: UPD_FILTER_BAR,
        payload: { option: 'list' },
      })
    ).toEqual({
      filterBar: 'list',
      rating: 1,
      isOpenFilterMenu: false,
    });
  });

  test('map', () => {
    expect(
      filteringPage(initialValue, {
        type: UPD_FILTER_BAR,
        payload: { option: 'map' },
      })
    ).toEqual({
      filterBar: 'map',
      rating: 1,
      isOpenFilterMenu: false,
    });
  });
});

test('rating', () => {
  expect(
    filteringPage(initialValue, {
      type: UPD_RATING,
      payload: { rating: 3 },
    })
  ).toEqual({
    filterBar: 'table',
    rating: 3,
    isOpenFilterMenu: false,
  });
});
