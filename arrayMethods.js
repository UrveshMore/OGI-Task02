
//Que:-2
const arr = [{
    Id: 1,
    Name: 'Urvesh',
    isVeg: true,
    Age: 20
},
{
    Id: 2,
    Name: 'Ajay',
    isVeg: true,
    Age: 14
},
{
    Id: 3,
    Name: 'Rohit',
    isVeg: false,
    Age: 22
},
{
    Id: 4,
    Name: 'Dharmesh',
    isVeg: true,
    Age: 18
}, {
    Id: 5,
    Name: 'Pritam',
    isVeg: false,
    Age: 20
},
{
    Id: 6,
    Name: 'Tejas',
    isVeg: true,
    Age: 13
}];

//A
console.log('-----------Map method-----------');
const veg = arr.map((element) => {
    if (element.isVeg) {
        console.log(`${element.Name} is veg`);
    }
})

//B
console.log('----------Filter method----------');
const age = arr.filter((element) => {
    if (element.isVeg && element.Age > 15) {
        console.log(`${element.Name} is veg and above 15`);
    }
});
/*
a.For-loop :- for loop is use to iterate and it will run same code over and over 
              again.

b. For-each :- forEach method is used to loop through the elements of an array. 
               Map & For-each are same but map return value and for-each return 
               undefine. for-each loop can't support method                 
               chaining. forEach method cannot be used with other array methods. 

c. Map :- The map method is used to transform the elements of an array.        
          it will retuen value. and it's support method chaining.The map
            method can be used with other array methods, such as the filter method

d. Filter :- filter Method is use to filter given array which satisfy    
            a condition set by the argument method. and it will be
             return new array
e. Reduce :- The reduce method executes a reducer function on each element of the array and returns a single output value.



*/