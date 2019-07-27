import test from 'ava';

import {getCurrentTimestamp, howOld} from '../dist';

test('get current timestamp', t => {
	t.is(getCurrentTimestamp(), Math.floor(Date.now() / 1000));
});

test('how old', t => {
	t.is(howOld(1564146357), getCurrentTimestamp() - 1564146357);
});
