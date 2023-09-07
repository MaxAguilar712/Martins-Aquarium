// const persons = [
//     { firstname: 'Malcom', lastname: 'Reynolds' },
//     { firstname: 'Kaylee', lastname: 'Frye' },
//     { firstname: 'Jayne',  lastname: 'Cobb' },
//   ];

const database = {
    fish1: [
        {
            name: "Bob",
            food: "Crustaceans",
            size: "12 inches",
            type: "Psychrolutidae",
        }
    ]
}
  function getFullName(item) {
    return [item.name, item.food, item.size, item.type].join(' ');
    
    // Alternative with template literals:
    // return `${ item.firstname } ${ item.lastname }`;
  }
  
  function renderList() {
    document.getElementById('list').innerHTML = database.map((fish) => {
      return `<li>${ getFullName(fish) }</li>`;
    }).join('');
    
    // Alternative using arrow function expression:
    // document.getElementById('list').innerHTML = persons.map(person => `<li>${ getFullName(person) }</li>`).join('');
    
  }
  
  renderList();