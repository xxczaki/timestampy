import test from 'ava';

import {
	subtractSeconds,
	subtractMinutes,
	subtractHours,
	subtractDays,
	subtractWeeks,
	subtractMonths,
	subtractYears
} from '../dist';

test('subtract seconds', t => {
	t.is(subtractSeconds(1546344000, {amount: 1}), 1546343999);
});

test('subtract minutes', t => {
	t.is(subtractMinutes(1546344000, {amount: 1}), 1546343940);
});

test('subtract hours', t => {
	t.is(subtractHours(1546344000, {amount: 1}), 1546340400);
});

test('subtract days', t => {
	t.is(subtractDays(1546344000, {amount: 1}), 1546257600);
});

test('subtract weeks', t => {
	t.is(subtractWeeks(1546344000, {amount: 1}), 1545739200);
});

test('subtract months', t => {
	t.is(subtractMonths(1546344000, {amount: 1}), 1543714257);
});

test('subtract years', t => {
	t.is(subtractYears(1546344000, {amount: 1}), 1514787074);
});
