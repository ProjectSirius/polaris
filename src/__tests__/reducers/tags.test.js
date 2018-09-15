import tags from '../../reducers/tags';

test('return state on non-action', () => {
  expect(tags([], {})).toEqual([]);
});

test('add one tag', () => {
  expect(
    tags([], {
      type: 'ADD_TAG',
      payload: {
        tags: { value: 'Rock', label: 'Rock', id: 2 },
      },
    })
  ).toEqual([{ value: 'Rock', label: 'Rock', id: 2 }]);
});

test('add another tag', () => {
  expect(
    tags([{ value: 'Rock', label: 'Rock', id: 2 }], {
      type: 'ADD_TAG',
      payload: {
        tags: { value: 'Jazz', label: 'Jazz', id: 4 },
      },
    })
  ).toEqual([
    { value: 'Rock', label: 'Rock', id: 2 },
    { value: 'Jazz', label: 'Jazz', id: 4 },
  ]);
});

test('remove tag', () => {
  expect(
    tags(
      [
        { value: 'Rock', label: 'Rock', id: 2 },
        { value: 'Jazz', label: 'Jazz', id: 4 },
      ],
      {
        type: 'REMOVE_TAG',
        payload: {
          tags: [{ value: 'Rock', label: 'Rock', id: 2 }],
        },
      }
    )
  ).toEqual([{ value: 'Rock', label: 'Rock', id: 2 }]);
});
