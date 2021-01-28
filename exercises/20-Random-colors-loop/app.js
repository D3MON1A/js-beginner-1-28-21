function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
    var i = 0;
	while(i < 10){
        i++;
        var colorNumber = (Math.floor(Math.random() * 4) + 1);
        var exampleColor = getColor(colorNumber);
        console.log(exampleColor);
    }
}

// function getAllStudentColors(quantity){
// 	for (var i = 0; i < quantity; i++)
//     {
//         if (i < quantity)
//         {
//             var random1_4 = (Math.round(Math.random() * (3) +1))
//             var exampleColor = getColor(random1_4);
//             console.log(exampleColor)
//         }    
//     }       
// }
// }

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

