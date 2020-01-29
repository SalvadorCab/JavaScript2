// // Askisi 2 

const mondayTasks = [
    {
        name: 'Daily standup',
        duration: 30, // specified in minutes
    },
    {
        name: 'Feature discussion',
        duration: 120,
    },
    {
        name: 'Development time',
        duration: 240,
    },
    {
        name: 'Talk to different members from the product team',
        duration: 60,
    },
];

// // 1os tropos

// const tableOfTaskDuration = mondayTasks.map( time => time.duration);
// console.log(tableOfTaskDuration);

// const moneyPerTask = tableOfTaskDuration.map( time => ((time / 60) * 25 ) );
// console.log(moneyPerTask);

// const summingAndBilling = moneyPerTask.reduce( (total, time) => total + time ,0 );
// console.log(`The total amount of money is ${summingAndBilling.toFixed(2)}€`);

// // 2os tropos

const calculateMondayMoney = mondayTasks
    .map(time => ((time.duration / 60) * 25))
    .reduce((total, time) => total + time, 0);
console.log(`The total amount of money is ${calculateMondayMoney.toFixed(2)}€`);