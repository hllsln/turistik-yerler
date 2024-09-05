import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const { pathname } = location;

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	});
	return (
		<a
			id='back-to-top'
			href={pathname}
			className={`btn btn-light btn-lg back-to-top ${
				isScrolled ? 'after-scroll' : 'before-scroll'
			}`}
			role='button'>
			<img src='src/assets/images/uparrow.png'></img>
		</a>
	);
};
export default BackToTop;
