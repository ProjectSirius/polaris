import lang from '../../reducers/lang';
import { CHANGE_LANG } from '../../actions/constants';

test('return state on non-action', () => {
  expect(lang('en', {})).toEqual('en');
});

test('lang change', () => {
  expect(
    lang('en', {
      type: CHANGE_LANG,
      payload: {
        lang: 'ru',
      },
    })
  ).toEqual('ru');
});
