const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
	//Get random number between 0 - 3 (colors [3])
	const randomColors = getRandomColors();
	// console.log(randomColors);

	//(=) say pahlay btaya colors kaha chlanay ha
	//Sub say uper walay jo colors liy un say multiply kerwaya = k baad (1st line walay)
	document.body.style.backgroundColor = colors[randomColors];
	color.textContent = colors[randomColors];
	//uper color. k baad apni merzi say kisi String no.(a,b,c...) say mulitiplay kerna ha colors ka code no. 
	// show kernay k liy.
});

	function getRandomColors(){
		return Math.floor(Math.random() * colors.length);
	};