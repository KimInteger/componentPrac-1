class PencilCase {
  type : string[];
  constructor( what : string[]) {
    this.type = what;
  }

  printPencilCase = () : void => {
    let pencilCaseContent : string[];
    pencilCaseContent = [];

    this.type.forEach((item:string)=>{
      pencilCaseContent.push(item);
    });
    
    console.log(`나의 필통에는 ${this.type}이 들어있습니다.`);
  }
}

const pencilCase = new PencilCase(["샤프","볼펜","지우개","샤프심","연필","만년필"]);

pencilCase.printPencilCase();