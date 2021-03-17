const a=[1,'1','Name',[1,2],true];
const result=a.map((obj)=>{
    return (typeof(obj));
})
console.log(result);   

o/p  ["number", "string", "string", "object", "boolean"]


var bike=["duke","ktm","rx100","enfield"];
console.log(bike.toString());   //toString


console.log(bike.join("*"));    //join

bike.pop();
console.log(bike);  //pop

bike.push("FZ");
console.log(bike);  //push


bike.shift();
console.log(bike);  //shift

bike.unshift("FZ");
console.log(bike);   //unShift


delete bike[0];
console.log(bike);   //delete

 bike.splice(2,0, "R15","ZMP");
 console.log(bike);     //splice

bike.splice(2,1);
console.log(bike);     //remove splice


var a=["varshy","surya","vaishu","guru"];
console.log(a.slice(1));       //slice


console.log(a.sort());   //sort


console.log(a.reverse());   //Reverse


var a=[10,20,5,3,40];
a.sort(function(a,b) {return a-b});
console.log(a);                //numeric sort


var a=[10,20,5,3,40];
a.sort(function(a,b) {return b-a});
console.log(a);       //Numeric sort


const a=[1,'1','Name',[1,2],true];
a.map((x)=>{
    return typeof(x);
})
console.log(a);