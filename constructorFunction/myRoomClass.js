class myRoom {
  constructor(name,group,type={}){
    this.name = name;
    this.group = group;
    this.type = type;
  }
}

let myFurniture = new myRoom('내방의 물건', '가구', {'의자' : '유어스', "책상":"보르네오","책장":"보르네오","침대":"없음","매트리스":"보르네오"});

console.dir(myFurniture);