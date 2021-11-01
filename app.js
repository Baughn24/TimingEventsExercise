//1

setTimeout(() => {
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText = `Hi`;
div1.append(p1);
}, 1000);

//2

setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);

setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3);
}, 3000);
}, 2000);

//3a
let time = 1;
setInterval(() => {
    time++;
}, 1000);

//3b
const full = setInterval(() => {
});

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(full);
});

//BONUS 4

    let timer = 120;
      
    const countdown = setInterval(() => {
        if (timer > 0 ) {
        console.log(timer);
      } else{
          clearInterval(countdown);
          console.log(`TIME IS UP`);
      }
      counter--;
}, 1000);
  

