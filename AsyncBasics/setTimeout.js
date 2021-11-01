//SET TIMEOUT METHOD
//setTimeout calls/executes a function after a set number of milliseconds (1000 milliseconds = 1 second)

/*
Syntax Example

setTimeout(function, milliseconds);
*/

//Example 1
//Function runs 2 seconds after the webpage loads (AKA after the JS file loads)
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Example 1 element`;
     div1.append(p1);

}, 2000);

//Example 2
//NOTE: Javascript does NOT wait for the function in the above
//Function runs one second after the webpge loads
setTimeout(() => {
    const div2 = document.querySelector(`#second`);
    const p2 = document.createElement(`p`);
    p2.innerText = `Example 2 element`;
     div2.append(p2);

}, 1000);

//Example 3
//Function runs 3 seconds after page loads
setTimeout(() => {
    const div3 = document.querySelector(`#third`);
    const p3 = document.createElement(`p`);
    p3.innerText = `Example 3 element`;
     div3.append(p3);
//Function runs 4 seconds after page loads (One second after the `Example 3 element` function runs. So the parent element (example 3 element) runs first, which would be 3 seconds and then the nested function (Second example 3 element) will run 1 second later, which gives you the 4 seconds)
setTimeout(() => {
    const p4 = document.createElement(`p`);
    p4.innerText = `Second Example 3 element`;
     div3.append(p4);
}, 1000);
}, 3000);