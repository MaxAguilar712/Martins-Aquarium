const database = {
    fish1: [
        {
            name: "Bob",
            food: "Crustaceans",
            size: "12 inches",
            type: "Psychrolutidae",
        }
    ], 
    fish2: [
        {
            name: "Angela",
            food: "Turtle",
            size: "37 inches",
            type: "Actinopterygii",
        }
    ],
    fish3: [
        {
            name: "Murray",
            food: "Mollusks",
            size: "5 feet",
            type: "Muraenidae",
        }
    ], 
    fish4: [
        {
            name: "Hammy",
            food: "Worms",
            size: "5 inches",
            type: "Brachionichthyidae",
        }
    ], 
    fish5: [
        {
            name: "Becky",
            food: "Barbled DragonFish",
            size: "4 inches",
            type: "Gigantura chuni",
        }
    ], 
}

let article = document.getElementById("fish-information");

let mySection = database.fish1;

article.innerHTML = mySection
    