const component = (age,job) => {
  let obj = {
    name : "인티저 김",
    age : age,
    job: job
  };

  let innerFunc = () => {
    if(obj.age > 20) {
      return '여름엔 역시 맥주가 최고지!';
    } else {
      return ("やっぱ、夏には牛乳が最高！");
    }
  };

  let anotherFunc = () => {
    if (obj.job === '開発者') {
      return '아니잖아?'
    } else {
      return '개발자가 되도록 노력하세요.'
    }
  };

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h2>${anotherFunc()}</h2>
  `;
}

console.log(component(40,'kaiten'));
