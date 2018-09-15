import details from '../../reducers/details';
import {
  DETAILS_RECEIVE_SUCCESS,
  DATA_DELETE_SUCCESS,
} from '../../actions/constants';

const data = {
  createdAt: '2018-09-10T10:01:30.257Z',
  createdBy: '58',
  creator: 'djVrezh',
  description:
    'American Idol top contestant, Shaun Barrowes, will sing your song.  Vocals in English with pop, jazz, country and R&B styles similar to these artists: Ed Sheeran, OneRepublic, Jason Mraz, Michael Buble, John Legend, and others.  Listen to Shaun Barrowes on Spotify and YouTube to hear vocal tones, styles, etc.  ↵↵Quick turnaround time with options, and you can ask for 1 revisions.  Sent as a WAV stem - with and without FX.  ',
  fields: [],
  id: '79',
  modifiedBy: '58',
  title: 'American Idol DJ to play your music',
  updatedAt: '2018-09-10T10:01:30.257Z',
};

test('return state on non-action', () => {
  expect(details({}, {})).toEqual({});
});

test('on details receive success', () => {
  expect(
    details(
      {},
      {
        type: DETAILS_RECEIVE_SUCCESS,
        payload: { data },
      }
    )
  ).toEqual(data);
});

test('delete', () => {
  expect(
    details(data, {
      type: DATA_DELETE_SUCCESS,
      payload: {
        id: 79,
        data: [],
      },
    })
  ).toEqual('deleted');
});
