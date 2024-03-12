var friends = ['이순신', '이황', '이이', '세종', '신사임당'];
console.log(friends);

// 원소 추가하기
friends.push('김구');
console.log(friends.toString()); // 문자열로 출력, ",콤마"로 구분

// 원소 제거하기
friends.pop();
console.log(friends.toString());

// 원소 추가하기(앞)
friends.unshift("윤동주");
console.log(friends.toString());

// 원소 추가하기 (뒤)
friends.shift();
console.log(friends.toString());