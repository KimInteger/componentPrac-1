class myRoom {
  constructor(name,group,type={}){
    this.name = name;
    this.group = group;
    this.type = type;
  }
}

let myFurniture = new myRoom('내방의 물건', '가구', {'의자' : '유어스', "책상":"보르네오","책장":"보르네오","침대":"없음","매트리스":"보르네오"});

// console.dir(myFurniture);

let myBook = new myRoom('내방의 물건','책',{"공부":{"코딩":["딥다이브","nodeExpress","사슴책","Python으로하는 깃, 깃허브","혼자공부하는 C언어"],"인문":["생각하지 않는 사람들","마시멜로 이야기","가시고기","해리포터와 불의 잔(문학?)","데일 카네기 인간론"],"영어":"수많은 해커스 토익책","일본어":["일본 문화와 역사의 이해","기초 일본어 공부","일본 근대 문학작가","고대부터 근대까지의 일본","일본 애니메이션의 역사","일본 근대문화"]}});

console.dir(myBook);