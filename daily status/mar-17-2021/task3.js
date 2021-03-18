//reduce

const value =[1,2,3,4,5,6,7,8,9,10] ;
const result = value.reduce((acc, ele) => {
  const type = ele % 2 === 0 ? 'even' : 'odd';
  acc[type].push(ele);
  return acc;
}, );
console.log('The result', result);




const a = [100,200,300,400,500,600,700,800,900,1000];
const bonus = 100;
const result = a.reduce((acc, ele) => {
    acc=acc+ele;
    console.log(acc,ele);
return acc;
},bonus);



