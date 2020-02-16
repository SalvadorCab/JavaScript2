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

  
//   1) Write a program that finds out what your hourly rate on a Monday would be
//   2) Use the map array function to take out the duration time for each task.
//   3) Multiply each duration by a per-hour rate for billing and sum it all up.
//   4) Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
//   5) Make sure the program can be used on any array of objects that contain a duration property with a
//   number value

// STEP 1
const hourSalary = 25;

const mondaySalaryRate = mondayTasks
    .map(tasks => isNaN(tasks.duration) === false ? (tasks.duration/60) * hourSalary : 
          console.log("Wrong duration time..."))     // STEP 2 & STEP 3
    .reduce((acc, newVal) => acc + newVal);              // STEP 3

console.log("€ " + mondaySalaryRate.toFixed(2));     // STEP 4


