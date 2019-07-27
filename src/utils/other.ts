'use strict';

const getCurrentTimestamp = (): number => {
	return Math.floor(Date.now() / 1000);
};

const howOld = (timestamp: number): number => {
	return getCurrentTimestamp() - timestamp;
};

export {
	getCurrentTimestamp,
	howOld
};
