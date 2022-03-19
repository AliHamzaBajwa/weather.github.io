const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
	//(#) colors k starting per anay walay number k liy liya ha.Na lenay ki sorat may color display nai hon gay
	let hexColor = "#";
	for(let i=0; i<6; i++){
		//sub say 1st line k variable say += k baad multiplay kiya
		   // hex say multiply honay walay string ko apni merzi say liya ha or nichay ja ker isi name per 
		   // function chla diya
		   		// (+=) = k sath + lena zroori ha
		hexColor += hex[getRandomColors()];
	}


	//(=) say pahlay btaya colors kaha chlanay ha
	  // (=) k baad hexColor let k veriable ka name liya ha
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
	//uper color. k baad apni merzi say kisi String no.(a,b,c...) say mulitiplay kerna ha colors ka code no. 
	// show kernay k liy.
	
});

function getRandomColors(){
	//(math.random) function k zariy kisi maqsos numbers ki list de jati ha jis may say ya function kisi b 
	//value ko apni merzi say utha ker screen per print ker deta ha. wo maqso number by default (0-1) hota  
	//hota ha. But hum isay zyada b ker saktay ha like(0-10)...example =[== math.floor(math.random()*10); ==]
	
	return Math.floor(Math.random() * hex.length);

	//(math.floor) function rearset lower value deta ha matlb ager ap k pass (1.2) value ha to ya (1) print
	//keray ga
};