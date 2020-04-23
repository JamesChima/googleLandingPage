// Create data array with the given values
  // declare interestCalculator function accepting an array argument/parameter
  // Calculate simple interest with given formula
  // log interestData to console
  // function returns array of objects 'interestData' with corrsponding keys
  // call function with data array


data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 2
    },
    {
        principal: 2000,
        time: 3
    }
];

function interestCalculator(dataArr){
    let interestData = dataArr;
    for (let obj of data) {
        
        if(obj.principal>=2500 && obj.time >1 && obj.time<3){
            obj.rate = 3;
        }
        else if(obj.principal>=2500 && obj.time>=3){
            obj.rate = 4;
        }
        else if(obj.principal < 2500 || obj.time<=1){
            obj.rate = 2;
        }
        else{
            obj.rate = 1;
        }
        obj.interest = (obj.principal * obj.rate * obj.time) / 100;

    }
    console.log(interestData)

    return interestData;
}

interestCalculator(data);
