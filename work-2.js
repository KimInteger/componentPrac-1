const component = () => {
  let obj = {
    name : "인티저 김",
    age : 20,
    job: "開発者"
  };

  let innerFunc = () => {
    if(obj.age > 20) {
      return '여름엔 역시 맥주가 최고지!';
    } else {
      return ("やっぱ、夏には牛乳が最高！");
    }
  }

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  `;
}

console.log(component());
