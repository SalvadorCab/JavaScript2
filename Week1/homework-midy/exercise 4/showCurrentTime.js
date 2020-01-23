let timer = document.createElement('p');
document.body.appendChild(timer);

let time = document.createTextNode('');
timer.appendChild(time)
setInterval(() => {
  let d = new Date();
  time.nodeValue = d.toTimeString().split(' ')[0];
}, 1000);