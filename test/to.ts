import test from 'ava';

import {toDate, toTime} from '../dist';

test('to date', t => {
	t.is(toDate(1564146357), '7/26/2019');
});

test('to time', t => {
	t.is(toTime(1564146357), '3:05:57 PM');
});
