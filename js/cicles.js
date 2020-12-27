let num = 50;


if( num < 49 ){
    console.log('Неверно')
}else if( num > 100){
    console.log('Неверно')
}else{
    console.log('Верно!')
}

/*(num == 50)? console.log('Верно!') : console.log('Неверно');*/  /*сокращение условия*/

switch(num){
    case 49:
        console.log('more..');
        break;
    case 100:
        console.log('mooooore....');
        break;
    case 90:
        console.log('cmon more...');
        break;
    case 50: 
        console.log('true');
        break;
    default:
        console.log('false');
        break;
}

/* циклы */

do {
    console.log(num);
    num++
}while(num < 55)

while (num < 60){
    console.log(num);
    num++;
}

for(let i = 0; i < 8; i++){
    console.log(i)
}

