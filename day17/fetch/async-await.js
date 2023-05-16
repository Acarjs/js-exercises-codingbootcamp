const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science';


const loadData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const listElement = document.getElementById('articles');
    data.data.channel.item.forEach((article) => {
      const item = document.createElement('li');
      item.innerText = article.title;
      listElement.appendChild(item);
    });
  } catch {
    console.log('there was an errer');
    const msg = document.createElement('p');
    msg.innerText = 'Sorry, unable to get the data.';
    document.body.appendChild(msg);
  } finally {
    console.log('executed everytime')
  }
};



loadData();
