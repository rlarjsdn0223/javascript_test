// let a = prompt(`당신의 점수를 입력해주세요`,``);

// let result = a > 60 ? `합격`: `불합격`;


// document.write(`<p>당신은 ${result}입니다.</p>`)

let answer = confirm('확인 또는 취소를 눌러주세요.');

answer || alert(`취소를 누르면 이 구문을 실행`);
answer && alert(`확인를 누르면 이 구문을 실행`);