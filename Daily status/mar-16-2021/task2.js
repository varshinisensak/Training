var values=[100,55,100,78,129];

//map
const map=values.map((obj)=>{
      if(obj >= 100)
      return obj;
})
console.log(map);

//forEach
const forEach=values.forEach((obj)=>{
    if(obj <= 100)
    return obj;
}
)
console.log(forEach);

//Filter
var values=[100,55,100,78,129];
const filter=values.filter((obj)=>{
     return obj===100;
})
console.log(filter);

//find
const find=values.find((obj)=>{
    return (obj === 100);
})
console.log(find);

//findIndex
const findIndex=values.findIndex((obj)=>{
    return (obj === 100);
})
console.log(findIndex);

//Some
const some=values.some((obj)=>{
    return (obj !=100);
})
console.log(some);

//Every
const every=values.every((obj)=>{
    return(obj === 55)
})
console.log(every);