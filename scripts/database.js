const database = {
    fish: [
        {
            image: "https://i.redd.it/h0r8wny6twb81.jpg",
            name: "Bob the Blobfish",
            food: "Crunchy Crustaceans",
            length: "12 inches",
            species: "Psychrolutidae",
            location: "the Pacific Ocean"
        },
        {
            image: "https://3.bp.blogspot.com/-Vkya-xXeX0Q/Tj0Dg8HeRdI/AAAAAAAAATg/hm6XbOLYWHk/s1600/Angler+Fish4.JPG",
            name: "Angela the Anglerfish",
            food: "Tasty Turtles",
            length: "37 inches",
            species: "Actinopterygii",
            location: "the Antarctic ocean"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Fangtooth_moray.jpg/800px-Fangtooth_moray.jpg",
            name: "Murray the Moray Eel",
            food: "Mollusks",
            length: "5 feet",
            species: "Muraenidae",
            location: "the Atlantic Ocean"
        },
        {
            image: "https://surfsupmagazine.com/wp-content/uploads/2022/09/red-handfish.jpg",
            name: "Hammy the HandFish",
            food: "wiggly Worms",
            length: "5 inches",
            species: "Brachionichthyidae",
            location: "Southern Australia"
        },
        {
            image: "https://surfsupmagazine.com/wp-content/uploads/2022/07/telescope-fish-eyes.jpg",
            name: "Tammy the Telescopefish",
            food: "Barby Barbled DragonFish",
            length: "4 inches",
            species: "Gigantura chuni",
            location: "the Indian Ocean"
        },
        {
            image: "https://www.petakids.com/wp-content/uploads/2015/01/Blue-Betta-Fish.jpg",
            name: "Betty the Betta Fish",
            food: "Brine Shrimp",
            length: "3 inches",
            species: "Osphronemidae",
            location: "Malaysia"
        },
    ]


}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

