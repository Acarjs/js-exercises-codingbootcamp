const images = [
    ["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","London"],
    ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","Paris"],
    ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","New York"],
    ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","Nova Scotia"],
    ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","Tokio"],
    ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","Venice"]
];

let gallery = document.querySelector('.gallery');

images.forEach(image => {
    // more readable way:
    // gallery.innerHTML += `
    //     <div class="image">
    //         <img src="${image[0]}" alt="${image[1]}">
    //         <div class="image__description">${image[1]}</div>
    //     </div>
    // `

    // only with concatenation
    gallery.innerHTML += '<div class="image"> <img src=' + image[0] + ' alt=' + image[1] + '> <div class="image__description">' + image[1] + '</div></div>';
})
