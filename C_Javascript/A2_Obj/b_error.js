function func1() {
  try {
  console.log("코드 실행 중 ... 1");

  throw new Error('에러를 발생시킵니다.');

  console.log("코드 실행 중 ... 2");
  } catch (e) {
    console.log("--- Error ---");
    console.log(e);
  } finally {
    console.log("--- Finally ---");
  }
}

func1();