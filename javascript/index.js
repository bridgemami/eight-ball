async function eightBall() {
	try {
let api = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
let response = await api.json();
		console.log(response[0]);
		document.getElementById('button').addEventListener('click',() =>{
			document.getElementById('answer').style.display='block'
			document.getElementById('answer').innerHTML=`${response[0]}`
			document.getElementById('chair').style.display='block'
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
	document.getElementById('answer').style.display='none'
	document.getElementById('chair').style.display='none';
})
}
resets()

const response = document.getElementById('questions').value.length;
			console.log(response)