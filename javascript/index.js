async function answerWithQuestion() {
	try {
let api = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
let response = await api.json();
		console.log(response[0]);
		let check = document.getElementById('button').addEventListener('click',(e) =>{
			e.preventDefault();
		let answer = document.getElementById('questions')
		let lengthAnswer = answer.value.length
			console.log(answer.value + lengthAnswer)
			if(lengthAnswer > 0) {
			document.getElementById('answer').style.display='block'
			document.getElementById('answer').innerHTML=`${response[0]}`
			// document.getElementById('chair').style.display='block'
			answerWithQuestion()
			}
			else {
				document.getElementById('answer').style.display='block'
			document.getElementById('answer').innerHTML=`Please enter a question`
			answerWithQuestion()
			}
		});
	
}
catch(err) {
	console.error(err)
}
}
answerWithQuestion();

function resets(){
	document.getElementById('empty').addEventListener('click', ()=>{
	document.getElementById('clear').reset()
	document.getElementById('answer').style.display='none'
	document.getElementById('chair').style.display='none'
	resets()
})
}
resets()
 function image () {
	fetch('./gif.json')
	.then(  (response) =>{
		return response.json();
	})
	.then((data) => {
		console.log(`${data[0]} ${data[0].image} + ${data[0].alt}`)
		let check = document.getElementById('button').addEventListener('click',(e) =>{
			e.preventDefault();
		let answer = document.getElementById('questions')
		let lengthAnswer = answer.value.length
			console.log(answer.value + lengthAnswer)
			if(lengthAnswer > 0) {
				console.log(`json length is ${data.length}`)
				console.log(data.length)
				let random = (Math.floor(Math.random()*(data.length-1)));
				console.log(random)
				document.getElementById('chair').style.display='block'
				document.getElementById("chair").src=`${data[random].image}`
				document.getElementById("chair").alt=`${data[random].alt}`
			image()
			}
			else {
				document.getElementById('chair').style.display='block'
				document.getElementById("chair").src=`${data[8].image}`
				document.getElementById("chair").alt=`${data[8].alt}`
			image()
			}
		});
	}
	)
	.catch((error) =>{
		console.error(`The reason is: ${error}`)
	}
	)
 }


image();
	