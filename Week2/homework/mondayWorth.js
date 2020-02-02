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

function dayRate(tasks) {
    let dur = tasks.map(item => item.duration / 60);
    return rate = dur
        .map(item => item * 25)
        .reduce((acc, curr) => acc + curr, 0);
};
console.log(`€${dayRate(mondayTasks).toFixed(2)}`);
