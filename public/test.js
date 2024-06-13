function tese(test1,test2,test3){
  this.test1 = test1
  this.test2 = test2
  this.test3 = test3
}

function tese2(test1,test2,test3){
  let obj = {}
  obj.test1 = test1
  obj.test2 = test2
  obj.test3 = test3
  return obj
}

let test = new tese(4,5,6)
let test2 = new tese2(4,5,6)




console.log(new tese(1,2,3))
console.log(test)
console.log(test instanceof tese)

console.log(tese2(1,2,3))
console.log(test2)
console.log(test2 instanceof tese2)


class test3 {
  constructor(something1,something2,something3,something4){
    this.something1 = something1
    this.something2 = something2
    this.something3 = something3
    this.something4 = something4
  }
}


const oh = new test3(1,2,3,4)
console.log(oh)
console.log(oh instanceof test3)

console.log(new test3(5,6,7,8))