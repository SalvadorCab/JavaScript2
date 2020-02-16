const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

  myHobbies.forEach(element => {
    let listElement = document.createElement("li");                
    let text = document.createTextNode(element);         
    listElement.appendChild(text);                              
    document.querySelector(".listaHobbies").appendChild(listElement); 
    console.log(text);
  })
