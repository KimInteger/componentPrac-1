class myRoom {
  constructor(name,group,type=[]){
    this.name = name;
    this.group = group;
    this.type = type;
  }

  show() {
    console.log(`${this.name}에 물건을 3종류로 나누어보았습니다. ${this.group}에는 ${this.type}...등이 있습니다.`)
  }
}

let myFurniture = new myRoom('내방의 물건', '가구', ['의자', "책상","책장","침대","매트리스"]);
myFurniture.show();
// console.dir(myFurniture);

let myBook = new myRoom('내방의 물건','책',["딥다이브","nodeExpress","사슴책","Python으로하는 깃, 깃허브","혼자공부하는 C언어","생각하지 않는 사람들","마시멜로 이야기","가시고기","해리포터와 불의 잔(문학?)","데일 카네기 인간론","수많은 해커스 토익책","일본 문화와 역사의 이해","기초 일본어 공부","일본 근대 문학작가","고대부터 근대까지의 일본","일본 애니메이션의 역사","일본 근대문화"]);
myBook.show();
// console.dir(myBook);

let myFitnessEquipment = new myRoom('내방의 물건', '운동기구', ["푸시업바","5kg아령","AB슬라이드"]);

myFitnessEquipment.show();