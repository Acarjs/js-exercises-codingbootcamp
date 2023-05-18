const textRating = document.querySelector('.rating__value')
const stars = document.querySelectorAll('.rating__star')

stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        // console.log('The stars NodeList:')
        // console.log(stars)
        console.log('The clicked star element:')
        console.log(star)
        console.log('The index of the clicked star in the NodeList:')
        console.log(index)
        // console.log('Rating expressed by text:')
        // console.log(textRating.textContent)
        console.log('-------------------------------------------------------------------------')
        // text value
        textRating.textContent = index + 1

        stars.forEach((innerStar, innerIndex) => {
            // console.log(innerStar)
            if (innerIndex < index + 1) {
                innerStar.classList.add("rating__star--on")
            } else {
                innerStar.classList.remove("rating__star--on")
            }
        })


    })
})