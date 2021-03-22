const bike =
    {
    model:2,
    name:"ford",
    wheel:4,
    color:"red"
    }
console.log(bike.name);







const bike =
{
    
        model:2,
        name:"ford",
        wheel:4,
        color:"red",
        result: function () {
        console.log(this.name);
        }
        };
      bike.result();
