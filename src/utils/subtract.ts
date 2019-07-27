'use strict';

interface Options {
	amount: number;
}

const subtractSeconds = (timestamp: number, {amount}: Options): number => {
	return timestamp - amount;
};

const subtractMinutes = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 60);
};

const subtractHours = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 3600);
};

const subtractDays = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 86400);
};

const subtractWeeks = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 604800);
};

const subtractMonths = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 2629743);
};

const subtractYears = (timestamp: number, {amount}: Options): number => {
	return timestamp - (amount * 31556926);
};

export {
	subtractSeconds,
	subtractMinutes,
	subtractHours,
	subtractDays,
	subtractWeeks,
	subtractMonths,
	subtractYears
};
