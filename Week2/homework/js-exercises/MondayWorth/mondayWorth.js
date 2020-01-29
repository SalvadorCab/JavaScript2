const hourlyRate = 25;

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

let calculateDailyRate = tasksArray => {
    durations = tasksArray.map(item => item.duration);
    dayHours = durations.reduce((sum, item) => sum + item, 0) / 60;
    dailyRate = (hourlyRate * dayHours).toFixed(2);
    return dailyRate;
}

console.log(`The payment of Monday is €${calculateDailyRate(mondayTasks)}`);
