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

const interestCalculator = data.map(intt => {
    let rate;
    if(int.principal >= 2500 && int.time < 3){
        return rate = 3;
    }
    else if(int.principal >= 2500 && int.time >= 3){
        return rate = 4;
    }
    if(int.principal < 2500 || int.time >= 1){
        return rate = 2;
    } else {
        return rate = 1;
    }

    let interest data 
});

// const interestCalculator = (data) => {
//     rate = 3;
// } 