const today = new Date;

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`
};

const container = () => {

  let hour = today.getHours();
  
  const whatHour = () =>{
    if(hour > 12) {
      return `
      ${tagComponent('header','헤더부분')}
      ${tagComponent('div','오후입니다.')}
      ${tagComponent('footer','푸터부분')}    
      `;
    } else {
      return `
      ${tagComponent('header','헤더부분')}
      ${tagComponent('div','오전입니다.')}
      ${tagComponent('footer','푸터부분')}    
      `;
    }
  }
  
  return whatHour();
};

console.log(container());