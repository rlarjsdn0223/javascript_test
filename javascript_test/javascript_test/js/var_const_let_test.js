// 변수
  let a = 1;
  console.log(a);
  a = 2;
  console.log(a);

// 상수
  const C = '주민등록번호';
  console.log(C); 

// 숫자로 시작할 수 없다.
// 언더바,$ 사용 가능
// 공백 사용 불가능

// 클래스 첫 글자를 대문자로 표기

//상수는 대문자만으로 표현

// 문자열
  let name = 'gildong';
  let name2 = "gildong";
  let name3 = `gildong`;
  
  let msg = '<a href="https://www.youtube.com/watch?v=UtYJ4_6mhJM">링크</a>'
  document.write(msg)

  let name4 = '홍길동';
  let age = 20;

  let msg1 = `<p>이름은 ${name4}이고 나이는 ${age} 살 입니다.</p>`;

  document.write(msg1);

  let msg2 = `여러\n줄 을 \n 표기해보자.`
  console.log(msg2);