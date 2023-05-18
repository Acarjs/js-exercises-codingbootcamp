import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new instance of ProgressBar.
//    Explore ProgressBar class, but the constructor does not need any parameter.
//    Take a body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:

const progressBarRed = new ProgressBar("red");
document.body.appendChild(progressBarRed.element);

const progressBarGreen = new ProgressBar("green");
document.body.appendChild(progressBarGreen.element);

const progressBarBlue = new ProgressBar("blue");
document.body.appendChild(progressBarBlue.element);

const button = document.createElement('button')
button.textContent = "Mix Colors"
button.addEventListener('click', () => {
    const colorConfig = {
        red: progressBarRed.value * 15,
        green: progressBarGreen.value * 15,
        blue: progressBarBlue.value * 15
    };
    button.style.backgroundColor = `rgb(${colorConfig.red},${colorConfig.green},${colorConfig.blue})`
})


document.body.appendChild(button)


console.log(progressBars);


// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
