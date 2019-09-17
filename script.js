const urls = [
'https://swapi.co/api/people/1/',
'https://swapi.co/api/people/2/',
'https://swapi.co/api/people/3/',
'https://swapi.co/api/people/4/',
'https://swapi.co/api/people/5/',
'https://swapi.co/api/people/6/',
'https://swapi.co/api/people/7/',
'https://swapi.co/api/people/8/',
'https://swapi.co/api/people/9/',
'https://swapi.co/api/people/10/',
'https://swapi.co/api/people/11/',
'https://swapi.co/api/people/12/',
'https://swapi.co/api/people/13/',
'https://swapi.co/api/people/14/'
]

Promise.all(urls.map(people => {
	return fetch(people)
	.then(resp => resp.json())
})) 

	.then(json => {
		document.getElementById("luke_name").innerHTML = `Name: ${json[0].name}`;
		document.getElementById("luke_gender").innerHTML = `Gender: ${json[0].gender}`;
		document.getElementById("luke_birth_year").innerHTML = `Birth year: ${json[0].birth_year}`;

		document.getElementById("C-3PO_name").innerHTML = `Name: ${json[1].name}`;
		document.getElementById("C-3PO_gender").innerHTML = `Gender: ${json[1].gender}`;
		document.getElementById("C-3PO_birth_year").innerHTML = `Birth year: ${json[1].birth_year}`;

		document.getElementById("R2-D2_name").innerHTML = `Name: ${json[2].name}`;
		document.getElementById("R2-D2_gender").innerHTML = `Gender: ${json[2].gender}`;
		document.getElementById("R2-D2_birth_year").innerHTML = `Birth year: ${json[2].birth_year}`;

		document.getElementById("darth_name").innerHTML = `Name: ${json[3].name}`;
		document.getElementById("darth_gender").innerHTML = `Gender: ${json[3].gender}`;
		document.getElementById("darth_birth_year").innerHTML = `Birth year: ${json[3].birth_year}`;

		document.getElementById("leia_name").innerHTML = `Name: ${json[4].name}`;
		document.getElementById("leia_gender").innerHTML = `Gender: ${json[4].gender}`;
		document.getElementById("leia_birth_year").innerHTML = `Birth year: ${json[4].birth_year}`;

		document.getElementById("owen_name").innerHTML = `Name: ${json[5].name}`;
		document.getElementById("owen_gender").innerHTML = `Gender: ${json[5].gender}`;
		document.getElementById("owen_birth_year").innerHTML = `Birth year: ${json[5].birth_year}`;

		document.getElementById("beru_name").innerHTML = `Name: ${json[6].name}`;
		document.getElementById("beru_gender").innerHTML = `Gender: ${json[6].gender}`;
		document.getElementById("beru_birth_year").innerHTML = `Birth year: ${json[6].birth_year}`;

		document.getElementById("R5-D4_name").innerHTML = `Name: ${json[7].name}`;
		document.getElementById("R5-D4_gender").innerHTML = `Gender: ${json[7].gender}`;
		document.getElementById("R5-D4_birth_year").innerHTML = `Birth year: ${json[7].birth_year}`;

	})

	.catch(err => console.log('Error', err));



