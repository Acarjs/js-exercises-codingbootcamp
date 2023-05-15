const btn = document.querySelector('#btn');


const fn = (text) => {
  console.log(text);
}

btn.addEventListener('click', () => fn());
// btn.addEventListener('click', fn()); //executing directly


