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
  {
    name: 'Drink coffee',
    duration: 15,
  },
];

function payPerDay(schedule) {
  const durations = schedule.map(obj => obj.duration);
  const moneyEarned = (durations.reduce((a, b) => a + b) / 60) * 25;
  return `You earned €${moneyEarned} today!`;
}

console.log(payPerDay(mondayTasks));
