// continue 와 break
// break:반복문을 빠져 나가는 명령어
//continue: 하위 표현식 실행하지 않고 다음 루프로 이동 

const arr =[`사과`, `귤`, `토마토`,`망고`]

for(const 과일 of arr){
  if( 과일 == `토마토`) break;

  alert(과일);
}