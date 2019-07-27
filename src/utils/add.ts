'use strict';

interface Options {
	amount: number;
}

const addSeconds = (timestamp: number, {amount}: Options): number => {
	return timestamp + amount;
};

const addMinutes = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 60);
};

const addHours = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 3600);
};

const addDays = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 86400);
};

const addWeeks = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 604800);
};

const addMonths = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 2629743);
};

const addYears = (timestamp: number, {amount}: Options): number => {
	return timestamp + (amount * 31556926);
};

export {
	addSeconds,
	addMinutes,
	addHours,
	addDays,
	addWeeks,
	addMonths,
	addYears
};
