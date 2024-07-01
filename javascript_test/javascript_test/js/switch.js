/*switch (a){
  case 경우1:
    실행문1
    break;
  
  case 경우2:
    실행문2
    break;

  default:
    실행문3
  break;
}*/


let a = prompt(`a 값을 입력해 주세요`,``);

switch(Number(a)){
  case 1:
    alert(`1을 입력하셨군요`)
  case 2:
    alert(`2를 입력하셨군요`)
  
  default:
    alert(`다른 값을 입력해주세요`)
}