'use strict';

import {getCurrentTimestamp} from './other';

interface Options {
	time: number;
}

const isOlderThan = (firstTimestamp: number, secondTimestamp: number): boolean => {
	if (firstTimestamp < secondTimestamp) {
		return true;
	}

	return false;
};

const isNewerThan = (firstTimestamp: number, secondTimestamp: number): boolean => {
	if (firstTimestamp > secondTimestamp) {
		return true;
	}

	return false;
};

const isMinuteOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 60) {
		return false;
	}

	return true;
};

const isHourOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 3600) {
		return false;
	}

	return true;
};

const isDayOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 86400) {
		return false;
	}

	return true;
};

const isWeekOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 604800) {
		return false;
	}

	return true;
};

const isFortnightOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 1209600) {
		return false;
	}

	return true;
};

const isMonthOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 2592000) {
		return false;
	}

	return true;
};

const isHalfYearOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 15552000) {
		return false;
	}

	return true;
};

const isYearOld = (timestamp: number): boolean => {
	if ((getCurrentTimestamp() - timestamp) < 31104000) {
		return false;
	}

	return true;
};

const isOldCustom = (timestamp: number, {time}: Options): boolean => {
	if ((getCurrentTimestamp() - timestamp) < time) {
		return false;
	}

	return true;
};

export {
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
};
