//CALLBACKS

//A callback function is a function passed into another function as an argument, which is then invoked/executed inside the outer/parent function to complete some kind of action
//NOTE: The setTimeout method is used in this lesson to mimic waiting on a response from an external source (Example: data from a server)

//Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText = `Hello`;
div1.append(p1);

//Without using a callback...
function getUserInfo(email){
    setTimeout(() =>  {
        return email;
    }, 2000);
}

//The `me@gmail` value is NOT set as the innerText because JS does NOT wait for the function to be completed before setting a value for user1. So what is returned on the webpage is "undefined"
const user1 = getUserInfo(`me@gmail.com`);
p1.innerText = user1;

//Using a callback...
//NOTE: The parameter name does not have to be callback, however callback is commonly used as a parameter name when setting up a function to accept a callback function as an argument for a paramenter. 
function getUserInfo(email, callback){
setTimeout(() => {
    callback(email);
}, 2000);
}

//`me@gmail` is being passed into the email parameter above. The 'e => p1.innertext = e' is being passed into the callback parameter above.
getUserInfo(`me@gmail.com`, e => {
    p1.innerText = e;
});

//Example 2
const div2 = document.querySelector(`#second`);
const p2 = document.createElement(`p`);
p2.innerText = `Example 2`;
div2.append(p2);

//The `Friday` value is set as the innerText becasue the value for innerText is being set in the callback function that is passed into the getRandomMovie function as an argument, which is then executed inside the getRandomMovie function to set the innerText value.
getRandomMovie = (movie, callback) => {
    setTimeout(() => {
        callback (movie);
    }, 3000);
}

getRandomMovie(`Friday`, m => {
    p2.innerText = m;
});

//Example 3
const div3 = document.querySelector(`#third`);
const p3 = document.createElement(`p`);
p3.innerText = `Example 3`;
div3.append(p3);
const p4 = document.createElement(`p`);
p4.innerText = `2nd Example 3`;
div3.append(p4);

function getShowTitle(showTitle, callback){
    setTimeout(() => {
        callback(showTitle);
    }, 4000);
}

function getReleaseDate(title, callback){
    setTimeout (() => {
        callback(`Nove 24, 2021`);
    }, 1000);
}

//The `hawkeye` value is set as the innerText becaue the value for innerText is being set in hte callback function that is passed into the getShowTitle function as an argument, which is then executed inside the getShowTitle function to set the innerText value. Also, in this example chaining on another callback to set the innerText using the "response" from the second request/function (AKA getReleaseDate).
getShowTitle(`Hawkeye`, t => {
     p3.innerText = t;
     getReleaseDate(t, d => {
         p4.innerText = d;
     });
});

//Example 4
const div4 = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
p5.innerText = `Example 4`;
div4.append(p5);

response = (data, onSuccess, onFailure) => {
    setTimeout(() => {
        //Using the "received" variable to determine whether we received the data we are pretending we requested
        const received = true;
        if (received){
            onSuccess(`Received Data: ${data}`);
        } else{
            onFailure(`Failed. Did not receive data.`)
        }
    }, 2000);
}

response(`Password123`, s => {
    p5.innerText = s;
}, f => {
    p5.innerText = f;
});



