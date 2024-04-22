var searchState = false;

function searchButton() {
	const payload = document.getElementsByClassName('PayLoader')[0];
	const app = document.getElementById('app');

	if (payload == undefined && app.children.length > 0) {
		searchState = true;
		
		const ps = document.createElement('div');
		ps.className = 'morePs';
		ps.innerText = '*以實車為準';
		document.body.appendChild(ps);
		
	}
	if (!searchState) requestAnimationFrame(searchButton);
}


searchButton();
