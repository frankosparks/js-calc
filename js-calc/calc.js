let calculation = JSON.parse(localStorage.getItem('calculation'));
      
if(!calculation){
  calculation = '';
}

function updateCalculation(){
    console.log(calculation);
    localStorage.setItem('calculation',JSON.stringify(calculation));

}


function bSymbols(number){
  
  if(number === '1'){
     calculation += '1';
  }
  else if(number === '2'){
    calculation += '2';
  }
  else if(number === '3'){
    calculation += '3'; 
 }
  else if(number === '/'){
    calculation += ' / ';
  }
  else if(number === '4'){
    calculation += '4';
 }
  else if(number === '5'){
    calculation += '5';
 }
 else if(number === '6'){
  calculation += '6';
 }
 else if(number === 'x'){
  calculation += ' * ';
 }
 else if(number === '7'){
  calculation += '7';
}
else if(number === '8'){
  calculation += '8';
}
else if(number === '9'){
  calculation += '9';
}
else if(number === ' - '){
  calculation += ' - ';
}
else if(number === '0'){
  calculation += '0';
}
else if(number === ' . '){
  calculation += '.';
}
else if(number === ' % '){
  calculation += '%';
}
else if(number === ' + '){
  calculation += ' + ';
}
else if(number === '='){
  calculation = eval(calculation);
}
updateCalculation();
display();
}

function display(){
document.querySelector('.js-disp').innerHTML = calculation;
}