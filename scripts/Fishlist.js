// Import the function that returns a copy of the fish array
import {getFish} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishcard">
            <div><img  class="fish__image--card" src="${singleFish.image}" /></div>
            <div class="fish__name"> Hi I'm ${singleFish.name} </div>
            <div class="fish__species"> I am from the ${singleFish.species} family </div>
            <div class="fish__length"> I am ${singleFish.length} long</div>
            <div class="fish__location">I come from ${singleFish.location}</div>
            <div class="fish__diet">I like to eat ${singleFish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


