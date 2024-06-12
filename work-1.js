const basicData = (name, age = 0, job = '백수') => {
  return {
    name : name,
    age : age,
    job : job
  }
}

class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set name(value) {
    if(typeof(value) === 'string'){
      this._name = value;
    } 
  }

  get name() {
    return this._name;
  }

  set age(value) {
    if(typeof(value) === 'number'){
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }

  set job(value) {
    if(typeof(value) === 'string') {
      this._job = value;
    }
  }

  get job() {
    return this._job
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

let a = component(new BasicData('김정수','29', 20));
console.log(a);

console.log(component(new BasicData('김인티저',29,'정수')));