import test from 'ava';

import {
	isOlderThan,
	isNewerThan,
	isMinuteOld,
	isHourOld,
	isDayOld,
	isWeekOld,
	isFortnightOld,
	isMonthOld,
	isHalfYearOld,
	isYearOld,
	isOldCustom
} from '../dist';

test('is older than', t => {
	t.is(isOlderThan(1488629013, 1564146357), true);
});

test('is newer than', t => {
	t.is(isNewerThan(1564146357, 1488629013), true);
});

test('is minute old', t => {
	t.is(isMinuteOld(1546344000), true);
});

test('is hour old', t => {
	t.is(isHourOld(1546344000), true);
});

test('is day old', t => {
	t.is(isDayOld(1546344000), true);
});

test('is week old', t => {
	t.is(isWeekOld(1546344000), true);
});

test('is 2 weeks old', t => {
	t.is(isFortnightOld(1546344000), true);
});

test('is month old', t => {
	t.is(isMonthOld(1546344000), true);
});

test('is 6 months old', t => {
	t.is(isHalfYearOld(1546344000), true);
});

test('is year old', t => {
	t.is(isYearOld(1546344000), false);
});

test('is 2 days old', t => {
	t.is(isOldCustom(1546344000, {time: 172800}), true);
});
