//your code here

const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const hands = document.querySelector(".hand");

let seconds = 90;
let minutes = 90;
let hours = 90;

setInterval(() => {
	seconds += 6;
	secondHand.style.transform = `rotate(${seconds}deg)`;
	console.log(minutes, seconds);

	if(seconds === 450){
		seconds = 90;
		minutes += 6;
		minuteHand.style.transform = `rotate(${minutes}deg)`;
	}

	if(minutes === 450){
		seconds = 90;
		minutes = 90
		hours += 35;
		hourHand.style.transform = `rotate(${hours}deg)`;
	}

	if(hours === 450){
		hours = 90;
	};
	
},1000)




