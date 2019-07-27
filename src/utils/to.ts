'use strict';

const toDate = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);

	return date.toLocaleDateString('en-US');
};

const toTime = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);

	return date.toLocaleTimeString('en-US');
};

export {
	toDate,
	toTime
};
