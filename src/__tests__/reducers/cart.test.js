import cart from '../../reducers/cart';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_DATA_SUCCESS,
} from '../../actions/constants';

const initialState = {
  buyer_id: null,
  selectedIds: [],
  cartData: [],
};

test('return state on non-action', () => {
  expect(cart(initialState, {})).toEqual(initialState);
});

test('Add to cart', () => {
  const data = {
    buyer_id: 25,
    cartData: [],
    selectedIds: ['79'],
  };

  expect(
    cart(initialState, {
      type: ADD_TO_CART,
      payload: {
        buyer_id: 25,
        id: '79',
      },
    })
  ).toEqual(data);
});

test('Remove from cart', () => {
  expect(
    cart(
      {
        buyer_id: 25,
        cartData: [],
        selectedIds: ['79'],
      },
      {
        type: REMOVE_FROM_CART,
        payload: {
          buyer_id: 25,
          id: '79',
        },
      }
    )
  ).toEqual({
    buyer_id: 25,
    cartData: [],
    selectedIds: [],
  });
});

test('On cart data success', () => {
  expect(
    cart(
      {
        buyer_id: 25,
        cartData: [],
        selectedIds: ['79'],
      },
      {
        type: CART_DATA_SUCCESS,
        payload: { data: [{ id: 79 }], buyer_id: 25 },
      }
    )
  ).toEqual({ buyer_id: 25, selectedIds: ['79'], cartData: [{ id: 79 }] });
});
