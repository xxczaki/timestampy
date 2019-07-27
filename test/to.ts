import test from 'ava';

import {toDate} from '../dist';

test('to date', t => {
	t.is(toDate(1564146357), '7/26/2019');
});
