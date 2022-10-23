async function eightBall() {
	try {
let api = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
let response = await api.json();
		console.log(response[0]);
		document.getElementById('button').addEventListener('click',
		() => {document.getElementById('answer').style='block'
			document.getElementById('answer').innerHTML=`${response[0]}`
		eightBall()

	}	
		)
}
catch(err) {
	console.error(err)
}
}
eightBall();

function resets(){
	document.getElementById('empty').addEventListener('click', ()=>{
	document.getElementById('clear').reset()
	document.getElementById('answer').style.display='none';
})
}
resets()