let name, surname, group

const btn = document.querySelector('#btn')
const func = () => {
	name = document.querySelector('#name').value
	surname = document.querySelector('#surname').value
	group = document.querySelector('#group').value
	groups = document.querySelector('.groups')
	console.log(name, surname, group);
	groups.insertAdjacentHTML('afterbegin', `
		<h1>Здраствуй, ${surname} ${name}. Вот твое расписание: </h1>
	`)
	document.querySelector('.login').classList.add('hide')
	if (group === 'ПИЭ(1гр)') {
		document.querySelector('.group1').classList.add('show')
	} else if (group === "ПИЭ(2гр)") {
		document.querySelector('.group2').classList.add('show')
	} else {
		document.querySelector('.container').insertAdjacentHTML('afterbegin', `
			<h1>Данной группы не существует!</h1>
		`)
		groups.classList.add('hide')
	}
}