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

const durat = mondayTasks.filter(funct);
function funct (items){
var dur=items.duration >=0;
return dur;
}

var result = mondayTasks.map(a => a.duration);
var cost = result.reduce((acc,item)=> {
                return acc+item},);
var finalcost=cost/60*25
console.log("The total billing is €"+finalcost.toFixed(2));