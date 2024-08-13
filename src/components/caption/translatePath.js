/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import useTween, { Bezier } from 'lesca-use-tween';
import { Children, cloneElement, useEffect } from 'react';
import './index.less';

const TranslatePath = ({ children, active = false, delay = 0, onComplete = () => {} }) => {
	const [style, setStyle] = useTween({ py: 30, opacity: 0 });

	useEffect(() => {
		if (active) {
			setStyle({ py: 0, opacity: 1 }, { delay, easing: Bezier.inOutQuart, onComplete });
		}
	}, [active]);

	return Children.map(children, (child) =>
		cloneElement(child, {
			...child.props,
			transform: `translate(0, ${style.py})`,
			style: { opacity: style.opacity },
		}),
	);
};
export default TranslatePath;
