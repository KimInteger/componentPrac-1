class PencilCase {
  type : string[];
  constructor( what : string[]) {
    this.type = what;
  }

  printPencilCase = () : void => {
    let pencilCaseContent : string[];
    this.type.forEach((item)=>{
      pencilCaseContent.push(item);
    });
    
    console.log(`나의 필통에는 ${this.type}이 들어있습니다.`);
  }
}