const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php';


// const promise = fetch(url);
//
// promise.then((response) => {
//   const promiseWithData = response.json();
//   promiseWithData.then((data) => {
//     console.log(data);
//   })
// });

// fetch(url).then(res => res.json()).then((data) => {
//   console.log(data);
// });

const loadData = async () => {
  const response = await fetch(url); // the rest of this function wait
  const data = await response.json();

  console.log(data);
};

loadData();
