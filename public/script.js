const xhr = new XMLHttpRequest();

const endPoint = 	'http://apis.data.go.kr/5100000/yeongcheon_nvpc_cltur_relics';

const encodeKey = encodeURI('4WZqKSFBKTKvEh0FmRpWZqAVCkO+2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD+U4tfMJql/Hst/g==');

xhr.open('get',`https://apis.data.go.kr/5100000/yeongcheon_nvpc_cltur_relics/getYeongcheonNvpcClturRelics1?serviceKey=4WZqKSFBKTKvEh0FmRpWZqAVCkO%252B2yz3ehUuYtqigHgFExfJZwCVJlXUJsqecScdYmrXgKD%252BU4tfMJql%252FHst%252Fg%253D%253D&pageNo=1&numOfRows=10`);
xhr.addEventListener('load',()=>{
  console.dir(xhr);
  console.log(typeof(xhr.response));

  let result = JSON.parse(xhr.responseText);
  console.log(result);

  let data = result.response.body.items.item;

  console.log(data);

  const ul = document.createElement('ul');
  const root = document.getElementById('root');
  
  data.forEach((item)=>{
    const li = document.createElement('li');
    li.textContent = item.nvpc_cltur_relics_nm
    ul.appendChild(li);
  })
  

  root.appendChild(ul);
});

xhr.send();
