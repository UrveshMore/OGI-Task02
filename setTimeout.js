// Que:-1
console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000);
console.log(3)
setTimeout(() => {
    console.log(4)
}, 0);
console.log(6);


/*                output
1 it will print first because of synchronous execution
3 it will print because synchronous execution nature of javascript
6 it will print because synchronous execution nature of javascript
4  it will  going to web api because of setTime out function and execute bfore console.log(2) because
timer in this function is zero seconds
2 it will going to web api because of setTime out function and execute after console.log(4) because
timer in this function is one seconds
*/