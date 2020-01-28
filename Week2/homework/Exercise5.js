const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];
 
  var list = document.createElement('ul');
  

    myHobbies.map(funct);
      function funct (item) {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
      
  };
  
   
  var app = document.querySelector('#app');
  app.appendChild(list);
 
