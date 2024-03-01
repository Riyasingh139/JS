//array methods
//array ==> store data
// store same or diffrent type of data

//array is set key/index value pair
//keys/ index are auto-gen and start with 0
//key/index of every array will start from zero
 
let array = [10,20,30,40,50];
console.log(array);

//add the data in array
//unshift() it add data from start
// array.push(60 ,70,80);
// console.log(array);
array.splice(3,1,70); //index,deletecount, adddata(optional)
console.log(array);

//delete data
//array.pop() delete data from end
//array.shift() delete data from start
// array.splice(4,1); //delete from given location
// console.log(array);

//read data
//single data
console.log(array[2]);
//multi data(foreach)
array.forEach(function (value,index){
    console.log(value,index);
});



//search
let search = 30;
//find
// find return only value 
//if result is not found we get undefined
let findresult = array.find(function(value,index){
    return value === search;
})
// console.log(findresult);
//filter
//filter return array
//if result is not found we get []
let filterresult = array.filter(function(value,index){
    return value === search;
});
// console.log(filterresult);  
//new array where i want a square  of a number
console.log(array);
//recreate array

let sqrArray = array.map(function (value , index){
    return "<li>"+ value * value + "</li>";
});

//convert array to string
let list = sqrArray.join("");
console.log(list);
