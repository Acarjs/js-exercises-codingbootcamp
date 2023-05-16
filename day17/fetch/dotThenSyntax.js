const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science';

fetch(url).then(res => res.json()).then((data) => {
  const listElement = document.getElementById('articles');
  data.data.channel.item.forEach((article) => {
    const item = document.createElement('li');
    item.innerText = article.title;
    listElement.appendChild(item);
  });
}).catch((e) => {
  console.log('ERROR', e);
  const msg = document.createElement('p');
  msg.innerText = 'Sorry, unable to get the data.';
  document.body.appendChild(msg);
}).finally(() => {
  console.log('this is executed everytime');
});
