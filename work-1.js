const basicData = (name, age = 0, job = '백수') => {
  return {
    name : name,
    age : age,
    job : job
  }
}

const component = (data={}) => {
  let obj = data;

  const decision = () => {

  };

  return `
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width initial-scale=1.0">
      <title>${obj.name}</title>
    </head>
    <body>${obj.age} ${obj.job}</body>
  </html>
  `;

};

let a = component(basicData('김정수'));
console.log(a);