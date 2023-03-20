import { useRef, useState } from 'react';
import { DIRECTION_STATE } from '../settings/constant';

const HOW_MUSH_HEAVY = 100;
const HOW_LONG_RESET = 500;

const useWheelHeavy = (reset = false) => {
	const [state, setState] = useState();
	const [direction, setDirection] = useState(DIRECTION_STATE.unset);

	const storage = useRef(0);
	const timeOutRef = useRef();

	const launcher = (delta) => {
		clearTimeout(timeOutRef.current);
		storage.current += delta;
		if (Math.abs(storage.current) > HOW_MUSH_HEAVY) {
			setState(true);
			setDirection(storage.current > 0 ? DIRECTION_STATE.next : DIRECTION_STATE.prev);
		}
		timeOutRef.current = setTimeout(() => {
			storage.current = 0;
			if (reset) setState(false);
		}, HOW_LONG_RESET);
	};

	return [state, launcher, direction];
};
export default useWheelHeavy;
