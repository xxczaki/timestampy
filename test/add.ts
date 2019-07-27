import test from 'ava';

import {
	addSeconds,
	addMinutes,
	addHours,
	addDays,
	addWeeks,
	addMonths,
	addYears
} from '../dist';

test('add seconds', t => {
	t.is(addSeconds(1546344000, {amount: 1}), 1546344001);
});

test('add minutes', t => {
	t.is(addMinutes(1546344000, {amount: 1}), 1546344060);
});

test('add hours', t => {
	t.is(addHours(1546344000, {amount: 1}), 1546347600);
});

test('add days', t => {
	t.is(addDays(1546344000, {amount: 1}), 1546430400);
});

test('add weeks', t => {
	t.is(addWeeks(1546344000, {amount: 1}), 1546948800);
});

test('add months', t => {
	t.is(addMonths(1546344000, {amount: 1}), 1548973743);
});

test('add years', t => {
	t.is(addYears(1546344000, {amount: 1}), 1577900926);
});
