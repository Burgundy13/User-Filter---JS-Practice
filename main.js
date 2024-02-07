let results = document.querySelector('#result');
let filter = document.querySelector('#filter');

let listOfUsers = [];

async function getData() {
	const res = await fetch('https://randomuser.me/api?results=50');
	const data = await res.json();
	results.innerHTML = '';

	data.results.forEach((user) => {
		let li = document.createElement('li');
		listOfUsers.push(li);

		li.innerHTML = `
		<img
		src="${user.picture.large}"
		alt="User"
	/>
	<div class="user-info">
		<h4>${user.name.first} ${user.name.last}</h4>
		<p>${user.location.city}, ${user.location.country}</p>
	</div>
		`;
		results.appendChild(li);
	});
}

getData();

filter.addEventListener('input', (e) => {
	filterData(e.target.value);
});

function filterData(searchTerm) {
	listOfUsers.forEach((item) => {
		if (item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
	});
}
