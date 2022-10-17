//imports
import { addPlant } from "./field.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


// take yearlyPlan as input 
export const plantSeeds = (yearlyPlan) => {

    // utilize 2 for loops to iterate yearlyPlan array
    // invoke corresponding factory functions with addPlant() function to add seed
    for (const row of yearlyPlan) {
        for (const plant of row) {

            if (plant === "Potato") {
                addPlant(createPotato()) 
            } else if (plant === "Asparagus") {
                addPlant(createAsparagus())
            }  else if (plant === "Corn") {
                addPlant(createCorn())
            } else if (plant === "Soybean") {
                addPlant(createSoybean())
            } else if (plant === "Sunflower") {
                addPlant(createSunflower())
            } else if (plant === "Wheat") {
                addPlant(createWheat())
            }
        
        }
    // does not need a return because addPlant() is being utlized which will push information into the array 
        
    }

}




