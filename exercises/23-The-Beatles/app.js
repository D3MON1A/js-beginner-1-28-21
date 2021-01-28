function sing() {
let string='';
for (let i = 0; i < 12; i++) {    
        if(i<4){string= string + 'let it be, ';}
        if(i==4){string= string +'words of wisdom, ';}
        if(i<10 && i>4){string= string +'let it be, ';}
        if(i==10){string= string +'there will be an answer, '; }   
        if(i>10){string= string +'let it be';}      
    }
    return string;
}
console.log(sing());

  
// const sing = () => {
//     var strTmp = ""
//     for (i = 0;i < 12;i++){
        
//         if (i == 4){
//             strTmp = strTmp + "words of wisdom, "
//         }
//         else if (i == 10){
//             strTmp = strTmp + "there will be an answer, "
//         }
//         else {
//             strTmp = strTmp + "let it be, "
//         }
//     }
//     return strTmp
// }

// //Your code above ^^^

// console.log(sing());