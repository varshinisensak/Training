
var x=[1,'1','Name',[1,2],true];
var result=x.map((a)=>{
  return(typeof(a));
})
console.log(result); // op:number,string,string,object,boolean

//splice
var bike=["fz","duke","enfield","rx100","ktm"];
bike.splice(3,0,"pulsar");
console.log(bike);


//slice
 console.log(bike.slice(3));


//pop
bike.pop();
console.log(bike);


//push
bike.push("pulsar");
console.log(bike);


//shift
bike.shift();
console.log(bike);


//unshift
bike.unshift("pulsar");
console.log(bike);


//delete
delete bike[0];
console.log(bike);


//sort
bike.sort();
console.log(bike);


//reverse
console.log(bike.reverse());


//tostring
console.log(bike.toString());


//join
console.log(bike.join("+"));


//numeric sort
var x=[12,2,3,45,55,6,78];
x.sort(function(a, b){return a - b});
console.log(x);


var x=[12,2,3,45,55,6,78];
x.sort(function(a, b){return b - a});
console.log(x);
