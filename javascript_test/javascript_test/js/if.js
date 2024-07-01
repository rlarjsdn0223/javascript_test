// 조건문 if

let a = 12
// /*
//   if(조건식){
//     참일때 실행한다
//   }
// */
// if (a > 10){
//   alert("a는 10보다 크다 ");
// }

let Grades = prompt(`당신의 점수를 입력해주세요.`,`점수입력`) //입력 받는 창 생성

if(Grades >= 90){
  alert(`당신은 A학점입니다.`);
}
else if(Grades >= 80){
  alert(`당신은 B학점입니다.`);
}
else{
  alert(`당신은 시험을 못봤군요`);
}

alert(`프로그램 종료`);
